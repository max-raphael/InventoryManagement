import { IResolvers } from '@graphql-tools/utils';

export const userResolvers: IResolvers = {
    Query: {
      users: () => {
        // replace this with actual database call
        return [{ id: "1", name: "John Doe", email: "john@example.com" }];
      },
    },
    Mutation: {
      addUser: (_: any, { name, email }: { name: string, email: string }) => {
        // replace this with actual database call
        return { id: "2", name, email };
      },
    },
  };