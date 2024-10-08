import { Block } from "payload/types";

const BlogPost: Block = {
  slug: "blogPost",
  labels: {
    singular: "Blog Post",
    plural: "Blog Posts",
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
          label: "Default",
          value: "default",
        },
        {
          label: "Reverse",
          value: "reverse",
        },
      ],
    },
  ],
};

export default BlogPost;
