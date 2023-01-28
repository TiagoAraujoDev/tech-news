// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for BlogPost documents */
interface BlogpostDocumentData {
    /**
     * Title field in *BlogPost*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blogpost.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *BlogPost*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blogpost.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image field in *BlogPost*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: blogpost.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Slice Zone field in *BlogPost*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: blogpost.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<BlogpostDocumentDataSlicesSlice>;
}
/**
 * Slice for *BlogPost → Slice Zone*
 *
 */
type BlogpostDocumentDataSlicesSlice = HeroBannerSlice | PostContentSlice;
/**
 * BlogPost document from Prismic
 *
 * - **API ID**: `blogpost`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogpostDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<BlogpostDocumentData>, "blogpost", Lang>;
export type AllDocumentTypes = BlogpostDocument;
/**
 * Primary content in HeroBanner → Primary
 *
 */
interface HeroBannerSliceDefaultPrimary {
    /**
     * Title field in *HeroBanner → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: hero_banner.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *HeroBanner → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: hero_banner.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Main_Image field in *HeroBanner → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_banner.primary.main_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    main_image: prismicT.ImageField<never>;
}
/**
 * Item in HeroBanner → Items
 *
 */
export interface HeroBannerSliceDefaultItem {
    /**
     * CTA_Text field in *HeroBanner → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_banner.items[].link_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    link_text: prismicT.KeyTextField;
    /**
     * CTA_Link field in *HeroBanner → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_banner.items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Default variation for HeroBanner Slice
 *
 * - **API ID**: `default`
 * - **Description**: `HeroBanner`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroBannerSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroBannerSliceDefaultPrimary>, Simplify<HeroBannerSliceDefaultItem>>;
/**
 * Slice variation for *HeroBanner*
 *
 */
type HeroBannerSliceVariation = HeroBannerSliceDefault;
/**
 * HeroBanner Shared Slice
 *
 * - **API ID**: `hero_banner`
 * - **Description**: `HeroBanner`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroBannerSlice = prismicT.SharedSlice<"hero_banner", HeroBannerSliceVariation>;
/**
 * Primary content in ImageContent → Primary
 *
 */
interface ImageContentSliceDefaultPrimary {
    /**
     * image field in *ImageContent → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image_content.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for ImageContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ImageContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageContentSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImageContentSliceDefaultPrimary>, never>;
/**
 * Slice variation for *ImageContent*
 *
 */
type ImageContentSliceVariation = ImageContentSliceDefault;
/**
 * ImageContent Shared Slice
 *
 * - **API ID**: `image_content`
 * - **Description**: `ImageContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageContentSlice = prismicT.SharedSlice<"image_content", ImageContentSliceVariation>;
/**
 * Primary content in PostContent → Primary
 *
 */
interface PostContentSliceDefaultPrimary {
    /**
     * Title field in *PostContent → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: post_content.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Paragraphs field in *PostContent → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: post_content.primary.paragraphs
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    paragraphs: prismicT.RichTextField;
}
/**
 * Default variation for PostContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: `PostContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PostContentSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<PostContentSliceDefaultPrimary>, never>;
/**
 * Slice variation for *PostContent*
 *
 */
type PostContentSliceVariation = PostContentSliceDefault;
/**
 * PostContent Shared Slice
 *
 * - **API ID**: `post_content`
 * - **Description**: `PostContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PostContentSlice = prismicT.SharedSlice<"post_content", PostContentSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { BlogpostDocumentData, BlogpostDocumentDataSlicesSlice, BlogpostDocument, AllDocumentTypes, HeroBannerSliceDefaultPrimary, HeroBannerSliceDefaultItem, HeroBannerSliceDefault, HeroBannerSliceVariation, HeroBannerSlice, ImageContentSliceDefaultPrimary, ImageContentSliceDefault, ImageContentSliceVariation, ImageContentSlice, PostContentSliceDefaultPrimary, PostContentSliceDefault, PostContentSliceVariation, PostContentSlice };
    }
}
