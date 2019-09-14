const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

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

    // db.collection("users").insertOne(
    //   {
    //     name: "shivam",
    //     age: 21
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "vipul",
    //       age: 40
    //     },
    //     {
    //       name: "shilpi",
    //       age: 50
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert data!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    db.collection("tasks").insertMany(
      [
        {
          discription: "take sunrise picture",
          completed: false
        },
        {
          discription: "lunch",
          completed: false
        },
        {
          discription: "kaam ho gya",
          completed: true
        }
      ],
      (error, result) => {
        if (error) {
          return console.log("Insert na hua!");
        }

        console.log(result.ops);
      }
    );
  }
);
