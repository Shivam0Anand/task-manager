require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("5d8b132a35e9410198c8d259")
  .then(task => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });
