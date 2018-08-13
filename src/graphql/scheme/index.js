import { gql } from 'apollo-server';

// resolvers
import * as todoResolvers from '../resolvers/todo';

// The GraphQL schema
export const typeDefs = gql`
  type todo {
    id: ID!
    title: String!
    done: Boolean!
  }

  input todoInput {
    title: String!
    done: Boolean!
  }

  type todos {
    todos: [todo]!
  }

  type Query {
    "A simple type for getting started!"
    getTodo: todos
  }

  type Mutation {
    addTodo(input: todoInput): todo
  }
`;

// A map of functions which return data for the schema.
export const resolvers = {
  Query: {
    ...todoResolvers,
  },
  Mutation: {
    addTodo: (parent, { input }, ctx) => {
      return ctx.dataSources.todoFactory.addTodo(input);
    },
  },
};
