const express = require("express");
const mongoose = require("mongoose");
const { Game } = require("./GameModel");
const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost/GameDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to mongodb !");
  })
  .catch((err) => {
    console.log("Could not connect to mongodb", err);
  });

app.post("/create", async (req, res) => {
  const game = new Game({
    title: req.body.title,
    genre: req.body.genre,
    year: req.body.year,
  });

  await game.save();
  return res.status(201).send("New Game Inserted");
});

app.get("/get-games", async (req, res) => {
  const games = await Game.find();
  res.send(games);
});

app.get("/games-by-year/:year", async (req, res) => {
  const year = parseInt(req.params.year);
  const games = await Game.find({
    year: year,
  });
  res.send(games);
});

app.listen(3000, () => {
  console.log("Listening on port 3000 !!!!!");
});
