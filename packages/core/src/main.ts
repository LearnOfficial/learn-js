import "reflect-metadata"
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "@learn/common/schemas"
import { resolvers } from "./resolvers";
import { DatabaseDataSource } from "./database/data_source";

await DatabaseDataSource.initialize();

const server = new ApolloServer({
	typeDefs: typeDefs.toString,
	resolvers: resolvers
});

const { url } = await startStandaloneServer(server, {
	listen: {port: 4000}
});

console.log(`Server ready at: ${url}`);
