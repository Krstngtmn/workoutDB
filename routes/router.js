//routing for local development server (devServer.js)

const routes = require("express").Router();

const workout = require("./workout");
const workoutAdd = require("./workout-add");
const workouts = require("./workouts");

routes.get("/", async function (req, res) {
  res.send(`Hello!`);
});

routes.use("/", workout);
routes.use("/", workoutAdd);
routes.use("/", workouts);

module.exports = routes;
