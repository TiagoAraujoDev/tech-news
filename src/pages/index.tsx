import Image from "next/image";

import { SubscribeButton } from "./components/SubscribeButton";

import styles from "../styles/pages/home.module.scss";

export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <section className={styles.heroSection}>
        <span>👏 Hey, welcome!</span>
        <h1>
          News about the <span>React</span> world
        </h1>
        <p>
          Get access to all publications <br />
          <span>for $9.90 month</span>
        </p>
        <SubscribeButton />
      </section>
      <Image src="/woman.png" width={334} height={520} priority alt="" />
    </main>
  );
}
