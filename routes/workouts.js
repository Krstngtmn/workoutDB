//functionality of a route

const workouts = require("express").Router();

workouts.get("/workouts", async function (req, res) {
  // res.send([
  //   { bookName: "Book Ben", bookId: "xcvrgf" },
  //   { bookName: "Book Boom", bookId: "iyuitr" },
  //   { bookName: "Book ABCD", bookId: "nfgvcd" },
  // ]);

  let db_connect = dbo.getDb();

  db_connect
    .collection("workouts")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

module.exports = workouts;
