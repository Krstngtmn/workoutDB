//functionality of a route

const workouts = require("express").Router();
// const dbo = require("../db/conn");
const { connectToDatabase } = require("../db/conn");

workouts.get("/workouts", async function (req, res) {
  // res.send([
  //   { bookName: "Book Ben", bookId: "xcvrgf" },
  //   { bookName: "Book Boom", bookId: "iyuitr" },
  //   { bookName: "Book ABCD", bookId: "nfgvcd" },
  // ]);

  // let db_connect = dbo.getDb();

  // db_connect
  //   .collection("workouts")
  //   .find({})
  //   .toArray(function (err, result) {
  //     if (err) throw err;
  //     res.json(result);
  //   });

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
