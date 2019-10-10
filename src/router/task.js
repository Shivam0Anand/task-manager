const express = require("express");
const Task = require("../models/task");
const auth = require("../middleware/auth");
const router = new express.Router();

// Create Task

router.post("/tasks", auth, async (req, res) => {
  //   res.send("test OK!");

  // const task = new Task(req.body);

  const task = new Task({
    ...req.body,
    owner: req.user._id
  });
  // console.log(task);

  try {
    await task.save();
    res.status(200).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Read Tasks

router.get("/tasks", auth, async (req, res) => {
  try {
    // const tasks = await Task.find({ owner: req.user._id });

    await req.user.populate("tasks").execPopulate();
    res.send(req.user.tasks);
    res.status(200).send(tasks);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Read Task

router.get("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findOne({ _id, owner: req.user._id });

    if (!task) {
      return res.send(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
});

// Update Task

router.patch("/tasks/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send("error: Invalid request");
  }

  try {
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id
    });

    if (!task) {
      return res.status(400).send();
    }

    updates.forEach(update => (task[update] = req.body[update]));
    await task.save();

    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Delete Task

router.delete("/tasks/:id", auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!task) {
      res.status(404).send();
    }
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
