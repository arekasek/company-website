import { Block } from "payload/types";

const PricingBlock: Block = {
  slug: "pricingBlock",
  labels: {
    singular: "Pricing Block",
    plural: "Pricing Blocks",
  },
  fields: [
    {
      name: "pricingItems",
      label: "Pricing Items",
      type: "array",
      fields: [
        {
          name: "description",
          label: "Description",
          type: "textarea",
        },
        {
          name: "image",
          label: "Image of service",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};

export default PricingBlock;
