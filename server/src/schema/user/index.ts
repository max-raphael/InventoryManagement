import { userTypeDefs } from './user.typeDefs';
import { userResolvers } from './user.resolvers';

export const userSchema = {
  typeDefs: userTypeDefs,
  resolvers: userResolvers,
};