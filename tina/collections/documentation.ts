import { Collection} from "tinacms";

const SwaggerTemplate = {
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

export const DocumentationCollection: Collection = {
  name: 'documentation',
  label: 'Документация',
  path: 'content/documentation',
  format: 'mdx',
  ui: {
    router: () => '/documentation',
    allowedActions: {
      delete: false
    }
  },
  fields: [
    {
      type: 'string',
      name: 'header',
      label: 'Заголовок'
    },
    {
      name: 'blocks',
      label: 'Разделы',
      type: "object",
      list: true,
      templates: [
        {
          name: 'desc',
          label: 'Описание',
          fields: [
            {
              name: 'string',
              type: 'string',
              label: 'Описание',
              ui: {
                component: 'textarea'
              }
            }
          ]
        },
        {
          name: 'checklists',
          label: 'Сценарии работы',
          fields: [
            {
              name: 'scenario',
              type: 'rich-text',
              isBody: true,
              label: "Сценарии",
              templates: [
                {
                  name: 'SwaggerLink',
                  label: 'Ссылка на сваггер',
                  fields: [
                    {
                      name: 'link',
                      type: 'string'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}