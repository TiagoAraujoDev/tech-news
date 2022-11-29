import { GetStaticProps } from "next";
import Image from "next/image";

import { stripe } from "../lib/stripe";

import { SubscribeButton } from "./components/SubscribeButton";

import styles from "../styles/pages/home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    price: string;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <main className={styles.homeContainer}>
      <section className={styles.heroSection}>
        <span>👏 Hey, welcome!</span>
        <h1>
          News about the <span>React</span> world
        </h1>
        <p>
          Get access to all publications <br />
          <span>for {product.price} month</span>
        </p>
        <SubscribeButton priceId={product.priceId} />
      </section>
      <Image src="/woman.png" width={334} height={520} priority alt="" />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1M8p8IJcoW6QFhat3qbJqlRL", {
    expand: ["product"]
  });

  return {
    props: {
      product: {
        priceId: price.id,
        price: new Intl.NumberFormat("pt-PT", {
          style: "currency",
          currency: "EUR"
        }).format(price.unit_amount! / 100)
      }
    },
    revalidate: 60 * 60 * 24
  };
};
