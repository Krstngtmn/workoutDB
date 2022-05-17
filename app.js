"use strict";
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dbo = require("./db/conn");

var allowedOrigins = ["https://example.com"];
/* var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Operation not allowed'))
    }
  }
} */

const app = express();

app.use(helmet());
/* app.use(cors(corsOptions)); */

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
