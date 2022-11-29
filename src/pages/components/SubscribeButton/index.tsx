import { signIn, useSession } from "next-auth/react";

import { api } from "../../../lib/api";
import { getStripeJs } from "../../../lib/stripe-js";

import styles from "./styes.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const { data: session } = useSession();

  const handleSubscription = async () => {
    if (!session) {
      signIn("github");
      return;
    }

    try {
      const response = await api.post("/checkout", {
        priceId: priceId,
      });

      const { sessionId } = response.data;

      const stripe = await getStripeJs();
      await stripe?.redirectToCheckout({ sessionId });
    } catch (err) {
      console.log({ message: err });
    }
  };

  return (
    <button className={styles.subscribeButton} onClick={handleSubscription}>
      Subscribe now
    </button>
  );
};
