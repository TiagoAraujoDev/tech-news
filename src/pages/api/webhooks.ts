import { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "micro";
import Stripe from "stripe";

import { stripe } from "../../lib/stripe";
import { saveSubscription } from "./_lib/manageSubscription";

export const config = {
  api: {
    bodyParser: false
  }
};

type SecretType = string | Buffer | string[];

const relevantEvents = new Set(["checkout.session.completed"]);

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "POST") {
    const buf = await buffer(request);
    const secret = request.headers["stripe-signature"] as SecretType;

    var event = {} as Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        buf,
        secret,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (error) {
      console.log("Webhook error:", error);
      response.status(400).send(`Webhook error: ${error}`);
    }

    const type = event.type;

    if (relevantEvents.has(type)) {
      console.log(event);
      try {
        switch (type) {
          case "checkout.session.completed":
            const checkoutSession = event.data
              .object as Stripe.Checkout.Session;

            await saveSubscription(
              checkoutSession.subscription!.toString(),
              checkoutSession.customer!.toString()
            );
            break;

          default:
            throw new Error("Unhandled event!");
        }
      } catch (error) {
        return response.json({
          error: `Webhook handler failed. Error: ${error}`
        });
      }
    }

    return response.json({ received: true });
  } else {
    response.setHeader("Allow", "POST");
    return response.status(405).end("Method not allowed!");
  }
};
