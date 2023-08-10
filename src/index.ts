import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// server setup
const server = new ApolloServer({
	// typeDefs, data types and relationships
	// resolvers, functions that run on each request
});

const { url } = await startStandaloneServer({ server, listen: { port: 4000 } });

console.log(`🚀 Server ready at ${url}`);
