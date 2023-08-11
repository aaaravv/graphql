/**
 * Query Type: special type for queries which define the entry point of every GraphQL query
 */

const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    Game: Game!
    Author: Author!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }
  type Query {
    review(id: ID!): Review
    reviews: [Review]
    game(id: ID!): Game
    games: [Game]
    author(id: ID!): Author
    authors: [Author]
  }
  type Mutation {
    deleteGame(id: ID!): [Game]
    createGame(input: GameInput!): Game
  }
  input GameInput {
    title: String!
    platform: [String!]!
  }
`;

module.exports = { typeDefs };
