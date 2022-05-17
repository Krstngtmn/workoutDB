const workout = require("express").Router();
const ObjectId = require('mongodb').ObjectId;
const { connectToDatabase } = require("../db/conn");

workout.get("/workout/:id", async function (req, res) {
  try {
    let { db } = await connectToDatabase();
    let myquery = { _id: ObjectId(req.params.id) };
    let workout = await db
        .collection('workouts')
        .findOne(myquery);

    return res.json(workout);
  } catch (error) {
    return res.json({
        message: new Error(error).message,
        success: false,
    });
  }
});

module.exports = workout;
