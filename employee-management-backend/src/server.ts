const express = require("express");
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  await server.start(); // Wait for the server to start

  server.applyMiddleware({ app });

  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/graphql`);
  });
}

startServer().catch((error) => {
  console.error("Error starting the server:", error);
});
