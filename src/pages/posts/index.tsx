import { Content } from "@prismicio/client";
import { format } from "date-fns";
import { GetStaticProps } from "next";
import Image from "next/image";

import { createClient } from "../../../prismicio";

import styles from "../../styles/pages/post.module.scss";

interface PostsProps {
  posts: {
    id: string;
    uid: string;
    title: string;
    description: string;
    created_at: string;
    img: {
      url: string;
      alt: string;
      dimensions: string;
      copyright: string;
    };
  }[];
}

export default function Posts({ posts }: PostsProps) {
  const handleReadMore = (path: string) => {
    window.location.href = `/posts/${path}`;
  };
  return (
    <section className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.postContainer}>
          <Image
            src={post.img.url}
            height="150"
            width="320"
            alt={post.img.alt}
          />
          <div>
            <div>
              <span className={styles.date}>{post.created_at}</span>
            </div>
            <div>
              <h2 className={styles.title}>{post.title}</h2>
            </div>
            <div>
              <p className={styles.description}>{post.description}</p>
            </div>
            <button
              onClick={() => handleReadMore(post.uid)}
              className={styles.readBnt}
            >
              Read more
            </button>
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
    console.log(page.data.description);
    return {
      id: page.id,
      uid: page.uid,
      title: page.data.title,
      description: page.data.description[0]?.text,
      created_at: format(
        new Date(page.first_publication_date),
        `MMMM dd, yyyy`,
      ),
      img: page.data.image,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
