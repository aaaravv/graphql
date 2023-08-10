import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema";

/**
 * Type definitions (schema)
 * These are the definitions of different types of data that we want to expose on our graph
 *
 * Resolvers
 */

// server setup
// typeDefs, data types and relationships
// resolvers, functions that run on each request

const server = new ApolloServer({
	typeDefs,
});

const { url } = await startStandaloneServer({ server, listen: { port: 4000 } });

console.log(`🚀 Server ready at ${url}`);
