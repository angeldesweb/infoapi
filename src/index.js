import express from 'express';
import { ApolloServer , gql } from 'apollo-server-express'
import typeDefs from './schema/typeDefs'
import resolvers from './schema/resolvers'
require('dotenv').config();

const port = process.env.PORT

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });
 
app.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:${ port }${server.graphqlPath}`)
);