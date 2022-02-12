const userList = require("./dummy-data");
const resolvers = {
  Query: {
    users() {
      return userList;
    },
  },
};

module.exports = { resolvers };
