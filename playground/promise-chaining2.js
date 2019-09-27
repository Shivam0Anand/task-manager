require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5d8b132a35e9410198c8d259")
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const deleteTaskAndCount = async id => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("5d8cc15716e16a341c9d6957")
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
