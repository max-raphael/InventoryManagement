import { gql } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { merge } from 'lodash';

import { userTypeDefs } from './user/user.typeDefs';
import { inventoryTypeDefs } from './inventory/inventory.typeDefs';
import { userResolvers } from './user/user.resolvers';
import { inventoryResolvers } from './inventory/inventory.resolvers';

const rootTypeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const typeDefs = [rootTypeDefs, userTypeDefs, inventoryTypeDefs];
const resolvers = merge(userResolvers, inventoryResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export { schema };
