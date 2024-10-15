"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Show = void 0;
exports.Show = {
  slug: "show",
  labels: {
    singular: "Show Block",
    plural: "Show Blocks",
  },
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "text",
      maxLength: 60,
    },
    {
      name: "text",
      label: "Text",
      type: "textarea",
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "images",
      label: "Images",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
