const { MongoClient } = require("mongodb");
const Db = process.env.DB_SERVER;
// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// let _db;

// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       if (db) {
//         _db = db.db("workoutDB");
//         console.log("Successfully connected to MongoDB.");
//       }
//       return callback(err);
//     });
//   },

//   getDb: function () {
//     return _db;
//   },
// };



const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
let client;
let clientPromise;
if (!Db) {
  throw new Error('Please add your Mongo URI to .env.local');
}
if (process.env['NODE_ENV'] === 'development') {
  // In development mode, use a global variable
  // so that the value is preserved across module reloads
  // caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(Db, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to
  // not use a global variable.
  client = new MongoClient(Db, options);
  clientPromise = client.connect(function (err, db) {
          if (db) {
            _db = db.db("workoutDB");
            console.log("Successfully connected to MongoDB.");
          }
          return callback(err);
        });
}
// Export a module-scoped MongoClient promise.
// By doing this in a separate module,
// the client can be shared across functions.
export default clientPromise;
