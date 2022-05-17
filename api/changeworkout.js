const app = require("../app");
const route = require("../routes/changeworkout");

app.use("/api/", route);

module.exports = app;
