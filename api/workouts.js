const app = require("../app");
const route = require("../routes/workouts");

app.use("/api/", route);

module.exports = app;
