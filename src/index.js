const express = require("express");
require("./db/mongoose.js");
const User = require("./models/user.js");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", async (req, res) => {
  //   console.log(req.body);
  //   res.send("test ok!");
  const user = new User(req.body);

  try {
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);

    if (!user) {
      res.send(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(404).send(e);
  }
});

app.post("/tasks", (req, res) => {
  //   res.send("test OK!");

  const task = new Task(req.body);

  task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.get("/tasks", (req, res) => {
  Task.find({})
    .then(tasks => {
      res.status(200).send(tasks);
    })
    .catch(e => {
      res.status(404).send();
    });
});

app.get("/tasks/:id", (req, res) => {
  const _id = req.params.id;

  Task.findById(_id)
    .then(task => {
      if (!task) {
        return res.status(404).send();
      }
      res.status(200).send(task);
    })
    .catch(e => {
      res.status(500).send("id not found!");
    });
});

app.listen(port, () => {
  console.log("we r on port " + port);
});
