const changeworkout = require("express").Router();
const ObjectId = require('mongodb').ObjectId;
const { connectToDatabase } = require("../db/conn");

changeworkout.post("/changeworkout", async function (req, res) {
  const { workoutId, changedWorkout } = req.query;

  if (workoutId) {  
    try {
      let { db } = await connectToDatabase();
      let myquery = { _id: ObjectId(workoutId) };
      const requestJSON = JSON.parse(changedWorkout);

      let newValues = {
        $set: {
          exercises: requestJSON.exercises,
          finished_workouts: requestJSON.finished_workouts,
        },
      };

      await db.collection('workouts').updateOne(myquery, newValues);
      
      // await db
      //   .collection('workouts')
      //   .update(myquery, newValues);

      return res.json({
        message: 'Post changed successfully',
        success: true,
      });
    } catch (error) {
      return res.json({
          message: new Error(error).message,
          success: false,
      });
    }
  }
});

module.exports = changeworkout;
