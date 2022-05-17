const workouts = require("express").Router();
const { connectToDatabase } = require("../db/conn");

workouts.get("/workouts", async function (req, res) {
  try {
    let { db } = await connectToDatabase();
    let workouts = await db
        .collection('workouts')
        .find({})
        .toArray();

    return res.json(workouts);
  } catch (error) {
    return res.json({
        message: new Error(error).message,
        success: false,
    });
  }
});

module.exports = workouts;
