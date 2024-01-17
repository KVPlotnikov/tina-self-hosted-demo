import { Collection } from "tinacms";

export const PageCollection: Collection = {
  name: "page",
  label: "Page",
  path: "content/pages",
  format: "md",
  ui: {
    router: ({ document }) => {
      console.log(document)
      console.log(document._sys.filename === 'documentation')
      if (document._sys.filename === 'documentation') {
        return '/documentation'
      }
      return "/"
    },
  },
  fields: [
    {
      type: "string",
      name: "header",
      label: "Header",
    },
    {
      type: "object",
      name: "logo",
      label: "Logo",
      fields: [
        { type: "image", name: "url", label: "URL" },
        { type: "string", name: "alt", label: "Alt Text" },
      ],
    },
    {
      type: "object",
      list: true,
      name: "links",
      label: "Links",
      ui: {
        itemProps: (item) => {
          return {
            label: item?.header,
          };
        },
      },
      fields: [
        { type: "string", name: "header" },
        { type: "string", name: "description" },
        { type: "string", name: "url" },
        {
          name: 'body',
          type: 'rich-text',
          isBody: true,
          templates: [
            {
              name: 'SwaggerLink',
              label: 'Ссылка на сваггер',
              fields: [
                {
                  name: 'link',
                  label: 'Ссылка',
                  type: "string"
                }
              ]
            }
          ]
        }
      ],
    },
  ],
};
