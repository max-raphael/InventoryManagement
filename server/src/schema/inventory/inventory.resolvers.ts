import { IResolvers } from '@graphql-tools/utils';

export const inventoryResolvers: IResolvers = {
    Query: {
      inventories: () => {
        // replace this with actual database call
        return [{ id: "1", itemName: "Lumber", quantity: 500 }];
      },
    },
    Mutation: {
      addInventory: (_: any, { itemName, quantity }: { itemName: string, quantity: number }) => {
        // replace this with actual database call
        return { id: "2", itemName, quantity };
      },
    },
  };