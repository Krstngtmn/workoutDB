const newWorkout = require("express").Router();
const { connectToDatabase } = require("../db/conn");

newWorkout.post("/workout-add", async function (req, res) {
  try {
    let { db } = await connectToDatabase();

    const { user_id, workout_name, exercises, finished_workouts } = req.body;

    let workout = {
      user_id: user_id,
      workout_name: workout_name,
      exercises: exercises,
      finished_workouts: finished_workouts,
    };
    
    let newWorkout = await db
      .collection('workouts')
      .insertOne(workout, function (err, res) {
        if (err) throw err;
        response.json(res);
      });

    res.send("Something done");

    // return res.json(newWorkout);
  } catch (error) {
    return res.json({
        message: new Error(error).message,
        success: false,
    });
  }
});

module.exports = newWorkout;

