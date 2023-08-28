import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "@learn/common/schemas"

const resolvers = {
	Query: {
		version: () => "0.0.1"
	}
};

const server = new ApolloServer({
	typeDefs: typeDefs.toString,
	resolvers
});

const { url } = await startStandaloneServer(server, {
	listen: {port: 4000}
});

console.log(`Server ready at: ${url}`);
