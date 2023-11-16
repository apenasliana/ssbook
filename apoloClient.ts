import { ApolloClient, InMemoryCache } from '@apollo/client'


const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://us-central1-ss-devops.cloudfunctions.net/GraphQL/",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient 