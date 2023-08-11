# Game Reviews GraphQL Server

Welcome to the Game Reviews GraphQL Server repository! This project provides a basic GraphQL server for managing and querying game reviews. The server is designed to offer a foundational understanding of setting up a GraphQL API and handling basic operations.

## Overview

This GraphQL server is built to manage game reviews and related data. It utilizes a mock database to simulate real-world scenarios, enabling you to explore GraphQL concepts without the complexities of a full-fledged application.

## Entry Points

The server exposes several entry points for querying and interacting with the data:

### Query Types

-   `review(id: ID!): Review`: Get a specific review by its ID.
-   `reviews: [Review]`: Get a list of all reviews.
-   `game(id: ID!): Game`: Get a specific game by its ID.
-   `games: [Game]`: Get a list of all games.
-   `author(id: ID!): Author`: Get a specific author by their ID.
-   `authors: [Author]`: Get a list of all authors.

### Mutation Types

-   `deleteGame(id: ID!): [Game]`: Delete a game by its ID.
-   `createGame(input: CreateGameInput!): Game`: Create a new game.
-   `updateGame(id: ID!, input: UpdateGameInput!): Game`: Update an existing game.

## Request and Response

When making a request to the GraphQL server, you'll send a query or mutation in the request body. The server processes the query and returns a response with the requested data.

For example, to get all reviews, you can send the following query:

```graphql
query {
	reviews {
		id
		rating
		content
		Game {
			id
			title
		}
		Author {
			id
			name
		}
	}
}
```

## Running the Server

To run the server, you'll need to have [Node.js](https://nodejs.org/en/) installed on your machine. Once you have Node.js installed, you can run the following commands to start the server:

```bash
npm install
npm start
```

## Next Steps

Now that you have the server up and running, you can start making requests to it. You can use a tool like [Postman](https://www.postman.com/) to send requests to the server. You can also use the [GraphQL Playground](https://github.com/graphql/graphql-playground) to explore the server and make requests.

## Exploration and Learning

This repository serves as a foundation for learning about GraphQL, setting up a server, and handling basic queries and mutations. Feel free to explore the codebase, experiment with queries and mutations, and build upon this basic server to create more complex applications.
