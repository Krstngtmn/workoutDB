//routing for local development server (devServer.js)

const routes = require("express").Router();

const workout = require("./workout");
const addworkout = require("./addworkout");
const changeworkout = require("./changeworkout");
const deleteworkout = require("./deleteworkout");
const workouts = require("./workouts");

routes.get("/", async function (req, res) {
  res.send(`Hello!`);
});

routes.use("/", workouts);
routes.use("/", workout);
routes.use("/", addworkout);
routes.use("/", changeworkout);
routes.use("/", deleteworkout);

module.exports = routes;
