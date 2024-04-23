import { Collection } from "tinacms";

export const DocumentationCollection: Collection = {
  name: 'documentation',
  label: 'Документация',
  path: 'content/documentation',
  format: 'mdx',
  fields: [
    {
      type: 'string',
      name: 'header',
      label: 'Заголовок'
    },
    {
      type: 'rich-text',
      name: 'body'
    }
  ]
}