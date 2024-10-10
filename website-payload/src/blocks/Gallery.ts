import { Block } from "payload/types";

const Gallery: Block = {
  slug: "gallery",
  labels: {
    singular: "Gallery",
    plural: "Galleries",
  },
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "text",
      maxLength: 60,
    },
    {
      name: "color",
      label: "Color (HEX)",
      type: "text",
      required: false,
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
    {
      name: "direction",
      label: "Direction",
      type: "select",
      options: [
        {
          label: "Left",
          value: "left",
        },
        {
          label: "Right",
          value: "right",
        },
      ],
    },
  ],
};

export default Gallery;
