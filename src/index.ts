const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const db = require("./_db");
const schema = require("./schema");

/**
 * Type definitions (schema)
 * These are the definitions of different types of data that we want to expose on our graph
 *
 * Resolvers
 * These are the functions that are called when a query is made against our graph
 * They are responsible for fetching the data for a given type and returning it
 */

const resolvers = {
	Query: {
		review: (_: any, args: { id: number }) => {
			return db.reviews.find((review) => review.id === args.id);
		},
		reviews: () => {
			return db.reviews;
		},

		game: (_: any, args: { id: number }) => {
			return db.games.find((game) => game.id === args.id);
		},
		games: () => {
			return db.games;
		},

		author: (_: any, args: { id: number }) => {
			return db.authors.find((author) => author.id === args.id);
		},
		authors: () => {
			return db.authors;
		},
	},
	Game: {
		reviews: (parent: { id: number }) => {
			return db.reviews.filter((review) => review.game_id === parent.id);
		},
	},
	Review: {
		Game: (parent: { game_id: number }) => {
			return db.games.find((game) => game.id === parent.game_id);
		},
		Author: (parent: { author_id: number }) => {
			return db.authors.find((author) => author.id === parent.author_id);
		},
	},
	Author: {
		reviews: (parent: { id: number }) => {
			return db.reviews.filter((review) => review.author_id === parent.id);
		},
	},
	Mutation: {
		deleteGame: (_: any, args: { id: number }) => {
			db.games = db.games.filter((game) => game.id !== args.id);
			return db.games;
		},
		createGame: (_: any, args: { input: { title: string; platform: string[] } }) => {
			const newGame = {
				id: String(db.games.length + 1),
				title: args.input.title,
				platform: args.input.platform,
			};
			db.games.push(newGame);
			return newGame;
		},
	},
};

const server = new ApolloServer({
	typeDefs: schema.typeDefs,
	resolvers,
});

startStandaloneServer(server, { listen: { port: 4000 } }).then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
