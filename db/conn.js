const { MongoClient } = require("mongodb");
const Db = "mongodb+srv://kris:Kriskris123@workout-app.m5vq5.mongodb.net/workoutDB?retryWrites=true&w=majority";
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbo;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (db) {
        dbo = db.db("workoutDB");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return dbo;
  },
};

module.exports = dbo;
