const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());
app.use(require("./api/workouts"));
const dbo = require("./db/conn");

// app.listen(port, () => {
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
//   });
//   console.log(`Server is running on port ${port}`);
// });

// module.exports = app;

// const express = require("express");
// const app = express();
// app.use(require("./api/workouts"));
// app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(5001, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
