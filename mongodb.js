const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("error!");
    }

    const db = client.db(databaseName);

    db.collection("users").findOne(
      { _id: new ObjectID("5d7cab559d446c092c7edf38") },
      (error, user) => {
        if (error) {
          return console.log("unable to fetch!");
        }

        console.log(user);
      }
    );
  }
);
