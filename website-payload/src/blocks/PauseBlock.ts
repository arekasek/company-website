import { Block } from "payload/types";

const PauseBlock: Block = {
  slug: "pauseBlock",
  labels: {
    singular: "Pause Block",
    plural: "Pause Blocks",
  },
  fields: [
    {
      name: "texts",
      label: "Texts",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "text",
          label: "Text",
          type: "text",
        },
      ],
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default PauseBlock;
