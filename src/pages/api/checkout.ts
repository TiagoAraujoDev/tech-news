import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { query as q } from "faunadb";

import { stripe } from "../../lib/stripe";
import { fauna } from "../../lib/fauna";

type User = {
  ref: {
    id: string;
  };
  data: {
    stripe_custumer_id: string;
  };
};

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "POST") {
    const session = await getSession({ req: request });

    const user = await fauna.query<User>(
      q.Get(
        q.Match(q.Index("user_by_email"), q.Casefold(session?.user?.email!))
      )
    );

    let customerId = user.data.stripe_custumer_id;

    if (!customerId) {
      const stripeCustumer = await stripe.customers.create({
        email: session?.user?.email!,
      });

      await fauna.query(
        q.Update(q.Ref(q.Collection("users"), user.ref.id), {
          data: {
            stripe_custumer_id: stripeCustumer.id,
          },
        })
      );

      customerId = stripeCustumer.id;
    }

    const successUrl = `${process.env.NEXT_URL}/posts`;
    const cancelUrl = `${process.env.NEXT_URL}/`;

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      billing_address_collection: "required",
      allow_promotion_codes: true,
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: "subscription",
      line_items: [
        {
          price: "price_1M8p8IJcoW6QFhat3qbJqlRL",
          quantity: 1,
        },
      ],
    });

    return response.status(201).json({
      sessionId: stripeCheckoutSession.id,
    });
  } else {
    response.setHeader("Allow", "POST");
    response.status(405).json({ error: "Method not allowed!" });
  }
};
