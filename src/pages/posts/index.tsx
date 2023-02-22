import { format } from "date-fns";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

import { createClient } from "../../../prismicio";

import styles from "../../styles/pages/posts.module.scss";

interface PostsProps {
  posts: {
    id: string;
    uid: string;
    tags: string[];
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

export default function Posts({ posts }: PostsProps) {
  const [search, setSearch] = useState<string>("");

  const filteredPosts = posts.filter((post) => {
    const title = post.title.toLowerCase();
    const description = post.description[0].text.toLowerCase();

    if (
      title.includes(search.toLowerCase()) ||
      description.includes(search.toLowerCase())
    ) {
      return post;
    }
  });

  return (
    <section className={styles.container}>
      <Head>
        <title>Posts | TechNews</title>
      </Head>
      <div className={styles.searchInput}>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <MagnifyingGlass size={24} />
      </div>
      {filteredPosts.map((info) => (
        <div key={info.id} className={styles.postContainer}>
          <Image
            style={{ borderRadius: "8px" }}
            src={info.image.url || 'Post image'}
            height="190"
            width="320"
            alt={info.image.alt}
          />
          <div className={styles.infoContainer}>
            <div>
              <span className={styles.date}>{info.created_at}</span>
              <h2 className={styles.title}>{info.title}</h2>
              {/* {info.tags.map((tag) => ( */}
              {/*   <span key={tag}>{tag}</span> */}
              {/* ))} */}
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

  const posts = pages.map((page) => {
    return {
      id: page.id,
      uid: page.uid,
      tags: page.tags,
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
      posts,
    },
  };
};
