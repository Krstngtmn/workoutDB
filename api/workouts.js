const express = require("express");
const workoutRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

workoutRoutes.route("/workouts").get(function (req, res) {
  let db_connect = dbo.getDb();

  db_connect
    .collection("workouts")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

workoutRoutes.route("/workout/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };

  db_connect.collection("workouts").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// Create a new workout.
workoutRoutes.route("/workout/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let workout = {
    user_id: req.body.user_id,
    workout_name: req.body.workout_name,
    exercises: req.body.exercises,
    finished_workouts: req.body.finished_workouts,
  };

  db_connect.collection("workouts").insertOne(workout, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// Update workout by id.
workoutRoutes.route("/workout/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      exercises: req.body.exercises,
      finished_workouts: req.body.finished_workouts,
    },
  };

  db_connect
    .collection("workouts")
    .update(myquery, newvalues, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
});

// Delete a workout
workoutRoutes.route("/workout/delete/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("workouts").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    response.json(obj);
  });
});

module.exports = workoutRoutes;
