import MyComponent from "../../../../slices/HeroBanner";

export default {
  title: "slices/HeroBanner",
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: "default",
      version: "sktwi1xtmkfgx8626",
      items: [
        {
          references: "carried",
          links: { link_type: "Web", url: "https://prismic.io" },
        },
      ],
      primary: {
        title: [{ type: "heading1", text: "Dream", spans: [] }],
        description: [
          {
            type: "paragraph",
            text: "Irure ad nulla ea duis dolor sint reprehenderit enim ipsum eu tempor ex officia. Consequat aliqua minim qui esse labore.",
            spans: [],
          },
        ],
        main_image: {
          dimensions: { width: 900, height: 500 },
          alt: null,
          copyright: null,
          url: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
        },
      },
      slice_type: "hero_banner",
      id: "_Default",
    }}
  />
);
_Default.storyName = "";
