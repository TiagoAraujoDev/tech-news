import Stripe from "stripe";

import packageInfo from "../../package.json";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
  appInfo: {
    name: "Technews",
    version: packageInfo.version
  }
});
