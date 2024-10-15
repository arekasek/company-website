"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingBlock = void 0;
exports.PricingBlock = {
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
        {
          name: "pageLink",
          label: "Page Link",
          type: "relationship",
          relationTo: "pages",
        },
      ],
    },
  ],
};
