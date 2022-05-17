const app = require("../app");
const route = require("../routes/workout-add");

app.use("/api/", route);

module.exports = app;
