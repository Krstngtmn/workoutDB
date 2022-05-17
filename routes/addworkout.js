const addworkout = require("express").Router();
const { connectToDatabase } = require("../db/conn");

addworkout.post("/addworkout", async function (req, res) {
  try {
    let { db } = await connectToDatabase();

    let workout = {
      user_id: req.body.user_id,
      workout_name: req.body.workout_name,
      exercises: req.body.exercises,
      finished_workouts: req.body.finished_workouts,
    };
    
    await db
      .collection('workouts')
      .insertOne(workout);

    return res.json({
      message: 'Post added successfully',
      success: true,
    });
  } catch (error) {
    return res.json({
        message: new Error(error).message,
        success: false,
    });
  }
});

module.exports = addworkout;
