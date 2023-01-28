import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from '@prismicio/react';

import styles from "../../src/styles/slices/ImageContent.module.scss";

/**
 * @typedef {import("@prismicio/client").Content.ImageContentSlice} ImageContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageContentSlice>} ImageContentProps
 * @param { ImageContentProps }
 */
type ImageContentSlice = Content.ImageContentSlice;
type ImageContentProps = SliceComponentProps<ImageContentSlice>;

const ImageContent = ({ slice }: ImageContentProps) => (
  <section className={styles.container}>
    <PrismicImage field={slice.primary.image} />
  </section>
)

export default ImageContent
