import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

import { createClient } from "../../../prismicio";
import { components } from "../../../slices";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Post({ page }: PageProps) {
  return <SliceZone slices={page.data.slices} components={components} />;
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
    fallback: false,
  };
};
