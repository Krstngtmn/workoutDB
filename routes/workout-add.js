const newWorkout = require("express").Router();
const { connectToDatabase } = require("../db/conn");

newWorkout.post("/workout-add", async function (req, res) {
  try {
    let { db } = await connectToDatabase();

    let workout = {
      user_id: req.body.user_id,
      workout_name: req.body.workout_name,
      exercises: req.body.exercises,
      finished_workouts: req.body.finished_workouts,
    };
    
    let newWorkout = await db
      .collection('workouts')
      .insertOne(workout, function (err, res) {
        if (err) throw err;
        response.json(res);
      });

    return res.json(newWorkout);
  } catch (error) {
    return res.json({
        message: new Error(error).message,
        success: false,
    });
  }
});

module.exports = newWorkout;

