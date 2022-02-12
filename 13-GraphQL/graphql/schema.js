const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type TestData{
    text: String!
    amount: Int!
}

type Query{
    message: String!
}

schema{
    query: Query
}

`);
