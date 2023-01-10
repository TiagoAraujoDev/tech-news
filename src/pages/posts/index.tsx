import { format } from "date-fns";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { createClient } from "../../../prismicio";

import styles from "../../styles/pages/posts.module.scss";

interface PostsProps {
  postsInfo: {
    id: string;
    uid: string;
    title: string;
    description: {
      type: string;
      text: string;
    }[];
    image: {
      url: string;
      alt: string;
    };
    created_at: string;
  }[];
}

export default function Posts({ postsInfo }: PostsProps) {
  return (
    <section className={styles.container}>
      <Head>
        <title>Posts</title>
      </Head>
      {postsInfo.map((info) => (
        <div key={info.id} className={styles.postContainer}>
          <Image
            style={{ borderRadius: "8px" }}
            src={info.image.url}
            height="190"
            width="320"
            alt={info.image.alt}
          />
          <div className={styles.infoContainer}>
            <div>
              <span className={styles.date}>{info.created_at}</span>
              <h2 className={styles.title}>{info.title}</h2>
              <p className={styles.description}>{info.description[0].text}</p>
            </div>
            <Link href={`/posts/${info.uid}`} className={styles.readBnt}>
              Read more
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient();
  const pages = await client.getAllByType("blogpost");

  const postsInfo = pages.map((page) => {
    return {
      id: page.id,
      uid: page.uid,
      title: page.data.title,
      description: page.data.description,
      image: page.data.image,
      created_at: format(
        new Date(page.first_publication_date),
        "MMMM dd, yyyy",
      ),
    };
  });

  return {
    props: {
      postsInfo,
    },
  };
};
