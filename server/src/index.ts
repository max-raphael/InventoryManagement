import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './schema';
import cors from 'cors';

async function startServer() {
  const PORT = process.env.PORT || 4000;

  const app = express();
  app.use(cors());

  const server = new ApolloServer({ schema });

  await server.start(); // new line

  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer()