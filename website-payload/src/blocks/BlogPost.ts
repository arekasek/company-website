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
      maxLength: 30,
    },
    {
      name: "text",
      label: "Text",
      type: "textarea",
    },
    {
      name: "images", // Zmiana z "image" na "images"
      label: "Images",
      type: "array", // Tablica, która zawiera wiele elementów
      minRows: 1, // Możesz ustawić minimalną liczbę wierszy (minimum 1)
      fields: [
        {
          name: "image",
          label: "Image",
          type: "upload", // Typ upload dla obrazu
          relationTo: "media",
          required: true, // Można ustawić jako wymagane
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
