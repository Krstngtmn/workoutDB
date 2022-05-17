const addworkout = require("express").Router();
const { connectToDatabase } = require("../db/conn");

addworkout.post("/addworkout", async function (req, res) {
  try {
    let { db } = await connectToDatabase();

    return res.json({
      message: req,
      success: true,
    });

    const requestJSON = JSON.parse(req.body);

    let workout = {
      user_id: requestJSON.user_id,
      workout_name: requestJSON.workout_name,
      exercises: requestJSON.exercises,
      finished_workouts: requestJSON.finished_workouts,
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
