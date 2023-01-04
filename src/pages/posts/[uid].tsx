import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { GetStaticPaths, GetStaticProps } from "next";
import { createClient } from "../../../prismicio";

import { components } from "../../../slices";

export default function Post({ page, navigation, settings }: any) {
  console.log(page);
  return <SliceZone slices={page.data.slices} components={components} />;
}

export const getStaticProps: GetStaticProps<
  any,
  { uid: string; previewData: any }
> = async ({ params, previewData }) => {
  const client = createClient({ previewData });

  const page = await client.getByUID("blogpost", params!.uid);

  return {
    props: {
      page,
    },
  };
};

export const getStaticPaths: any = async () => {
  const client = createClient();

  const pages = await client.getAllByType("blogpost");

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: true,
  };
};
