const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
  }

  type Query {
    users: [User!]!
    test: String
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
