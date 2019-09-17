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

    db.collection("tasks").findOne(
      { _id: new ObjectID("5d7ca75695a2e022041e5682") },
      (error, task) => {
        if (error) {
          return console.log("Unable to fetch data bhai!");
        }

        console.log(task);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });

    db.collection("tasks")
      .find({ completed: false })
      .count((error, count) => {
        console.log(count);
      });
  }
);
