import Head from "next/head";
import Image from "next/image";

import { SocialLinks } from "./components/SocialLink";

import styles from "../styles/pages/home.module.scss";

export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <Head>
        <title>Home | TechNews</title>
      </Head>
      <section className={styles.heroSection}>
        <span>👋 Hey, I&apos;m Tiago!</span>
        <h1>
          Let&apos;s talk about <span>React and Node.js</span>
        </h1>
        <p>
          Follow me on my social medias <br />
        </p>
        <SocialLinks />
      </section>
      <Image src="/woman.png" width={334} height={520} priority alt="" />
    </main>
  );
}
