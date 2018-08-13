import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './scheme';
import TodoFactory from '../services/TodoFactory';

const createGraphqServer = app => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      todoFactory: new TodoFactory(),
    }),
  });

  server.applyMiddleware({ app }); // app is from an existing express app
};

export default createGraphqServer;
