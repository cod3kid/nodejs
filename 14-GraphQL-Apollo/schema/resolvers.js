const userList = require("./dummy-data");
const { find } = require("lodash");

const resolvers = {
  Query: {
    users: () => {
      return userList;
    },
    user: (parent, args) => {
      const { id } = args;
      user = find(userList, { id: parseInt(id) });
      return user;
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      console.log(user);

      userList.push({
        id: userList.length + 1,
        ...user,
      });

      return user;
    },
  },
};

module.exports = { resolvers };
