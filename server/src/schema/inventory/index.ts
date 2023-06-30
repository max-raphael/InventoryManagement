import { inventoryTypeDefs } from './inventory.typeDefs';
import { inventoryResolvers } from './inventory.resolvers';

export const inventorySchema = {
  typeDefs: inventoryTypeDefs,
  resolvers: inventoryResolvers,
};