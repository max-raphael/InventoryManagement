import { gql } from 'apollo-server-express';

export const userTypeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  extend type Query {
    users: [User!]!
  }

  extend type Mutation {
    addUser(name: String!, email: String!): User!
  }
`;