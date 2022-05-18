const app = require("../app");
const route = require("../routes/deleteworkout");

app.use("/api/", route);

module.exports = app;
