import createApolloClient from "@/apoloClient";
import { DocumentNode, gql } from "@apollo/client";

export async function executeQuery(query: DocumentNode) {
  const client = createApolloClient();
  const { data } = await client.query({
    query: query,
  });

  return data
}