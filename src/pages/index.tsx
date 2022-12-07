import Image from "next/image";

import { SocialLinks } from "./components/SocialLink";

import styles from "../styles/pages/home.module.scss";

export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <section className={styles.heroSection}>
        <span>👋 Hey, I'm Tiago!</span>
        <h1>
           Let's talk about <span>React and Node.js</span>
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
