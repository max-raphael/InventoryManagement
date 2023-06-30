import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',  // replace with your GraphQL server URL
  cache: new InMemoryCache(),
});