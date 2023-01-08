import React from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

import styles from "../../src/styles/slices/PostContent.module.scss";

/**
 * @typedef {import("@prismicio/client").Content.PostContentSlice} PostContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PostContentSlice>} PostContentProps
 * @param { PostContentProps }
 */

type PostContentSlice = Content.PostContentSlice;
type PostContentProps = SliceComponentProps<PostContentSlice>;

const PostContent = ({ slice }: PostContentProps) => (
  <section className={styles.container}>
    <div className={styles.title}>
      <PrismicRichText field={slice.primary.title} />
    </div>
    <div className={styles.paragraph}>
      <PrismicRichText field={slice.primary.paragraphs} />
    </div>
  </section>
);

export default PostContent;
