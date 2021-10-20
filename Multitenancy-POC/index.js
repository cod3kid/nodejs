const express = require("express");
const app = express();
const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "multitenancy",
  },
});

app.use(express.json());

app.post("/create-tenant", async (req, res) => {
  const subDomain = req.body.subDomain;
  try {
    await knex.schema.createTable(`${subDomain}_users`, (table) => {
      table.increments("id");
      table.string("user_name");
    });
  } catch (ex) {
    console.log("exception", ex);
  }
  res.send("Created");
});

app.listen(3000, () => {
  console.log("server Runnning");
});
