const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = Japanese
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }

  enum Nationality {
    American
    Japanese
    Irish
    Spanish
    English
  }
`;

module.exports = { typeDefs };
