const app = require("../app");
const route = require("../routes/addworkout");

app.use("/api/", route);

module.exports = app;
