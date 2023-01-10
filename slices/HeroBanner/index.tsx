import React from "react";
import {
  PrismicImage,
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { Content } from "@prismicio/client";

import styles from "../../src/styles/slices/HeroBanner.module.scss";

/**
 * @typedef {import("@prismicio/client").Content.HeroBannerSlice} HeroBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroBannerSlice>} HeroBannerProps
 * @param { HeroBannerProps }
 */

type HeroBannerSlice = Content.HeroBannerSlice;
type HeroBannerProps = SliceComponentProps<HeroBannerSlice>;

const HeroBanner = ({ slice }: HeroBannerProps) => (
  <section className={styles.container}>
    <PrismicImage field={slice.primary.main_image} />
    <div className={styles.title}>
      <PrismicRichText field={slice.primary.title} />
    </div>
    <div className={styles.descrioption}>
      <PrismicRichText field={slice.primary.description} />
    </div>
    <div className={styles.linkContainer}>
      {slice?.items?.map((item, index) => (
        <PrismicLink key={index} field={item.link} target="_blank">
          <div className={styles.link}>{item.link_text}</div>
        </PrismicLink>
      ))}
    </div>
  </section>
);

export default HeroBanner;
