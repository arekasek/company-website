import SimpleRichText from "../blocks/SimpleRichText";
import PricingBlock from "../blocks/PricingBlock";
import BlogPost from "../blocks/BlogPost";
import Gallery from "../blocks/Gallery";
import { CollectionConfig } from "payload/types";

const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [PricingBlock, BlogPost, SimpleRichText, Gallery],
    },
  ],
};

export default Pages;
