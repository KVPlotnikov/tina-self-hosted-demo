import { Documentation } from '../../components'
import { client } from "../../tina/__generated__/databaseClient";

export default async function DocumentationPage() {
  const res = await client.queries.documentation({ relativePath: "reg.mdx" });

  console.log('res',res)

  return (
    <Documentation
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  )
}