"use strict";
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

var allowedOrigins = ["https://workout-app-livid.vercel.app"];
const app = express();

app.use(helmet());

module.exports = app;
