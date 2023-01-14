import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { format } from "date-fns";

import { createClient } from "../../../prismicio";
import { components } from "../../../slices";

import styles from "../../styles/pages/post.module.scss";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Post({ page }: PageProps) {
  const publicationDate = format(
    new Date(page.first_publication_date),
    "MMMM dd, yyyy",
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Post | {page.data.title}</title>
      </Head>
      <span className={styles.date}>{publicationDate}</span>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}

type PageParams = { uid: string };

export const getStaticProps = async ({
  params,
  previewData,
}: GetStaticPropsContext<PageParams>) => {
  if (!params) {
    return;
  }

  const client = createClient({ previewData });
  const page = await client.getByUID("blogpost", params.uid);

  return {
    props: {
      page,
    },
  };
};

export const getStaticPaths = async () => {
  const client = createClient();
  const pages = await client.getAllByType("blogpost");

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: true,
  };
};
