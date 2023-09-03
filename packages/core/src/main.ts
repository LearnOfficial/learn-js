import 'reflect-metadata';
import { DatabaseDataSource } from './database/data_source';
import { apolloResolvers as resolvers } from './resolvers';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from '@learn/common/schemas';
import { authContext } from './auth/context';
import { SERVER_ENV } from '@learn/common/env';

await DatabaseDataSource.initialize();

const server = new ApolloServer({
  typeDefs: typeDefs.toString,
  resolvers: resolvers
});

const { url } = await startStandaloneServer(server, {
  context: authContext,
  listen: {
    port: SERVER_ENV.port,
    host: SERVER_ENV.host
  }
});

console.log(`Server ready at: ${url}`);
