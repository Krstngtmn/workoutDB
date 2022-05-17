//routing for local development server (devServer.js)

const routes = require("express").Router();

const workout = require("./workout");
const workouts = require("./workouts");

routes.get("/", async function (req, res) {
  //homepage route returns some HTML
  res.send(`<h1>Reached home!</h1> 
            <br>
            <a href='/books'>Books</a>`);
});

routes.use("/", workout);
routes.use("/", workouts);

module.exports = routes;
