const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type TestData{
    text: String!
    amount: Int!
}
type RootQuery{
    message: TestData!
}

schema{
    query: RootQuery
}

`);
