const workout = require("express").Router();
const ObjectId = require('mongodb').ObjectId;
const { connectToDatabase } = require("../db/conn");

workout.get("/workout", async function (req, res) {
  const { workoutId } = req.query;
  if (workoutId) {
    try {
      let { db } = await connectToDatabase();
      let myquery = { _id: ObjectId(workoutId) };
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
  } else {
    res.send("No workout ID");
  }
});

module.exports = workout;

