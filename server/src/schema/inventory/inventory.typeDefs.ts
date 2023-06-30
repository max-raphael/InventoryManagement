import { gql } from 'apollo-server-express';

export const inventoryTypeDefs = gql`
  type Inventory {
    id: ID!
    itemName: String!
    quantity: Int!
  }

  extend type Query {
    inventories: [Inventory!]!
  }

  extend type Mutation {
    addInventory(itemName: String!, quantity: Int!): Inventory!
  }
`;