const { ApolloServer, gql } = require('apollo-server');

import {DataProvider} from './data'

import { typeDefs, resolvers } from './graphql/index'

const {
  ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',

  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});

const data =  DataProvider.create()

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
  