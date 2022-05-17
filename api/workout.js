const app = require("../app");
const route = require("../routes/workout");

app.use("/api/", route);

module.exports = app;
