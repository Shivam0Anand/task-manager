const express = require("express");
require("./db/mongoose.js");
const User = require("./models/user.js");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", (req, res) => {
  //   console.log(req.body);
  //   res.send("test ok!");
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.post("/tasks", (req, res) => {
  //   res.send("test OK!");

  const task = new Task(req.body);

  task
    .save()
    .then(() => {
      res.send(task);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.listen(port, () => {
  console.log("we r on port " + port);
});
