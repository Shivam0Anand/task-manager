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

const deleteTaskAndCount = async (id, completed) => {
  await Task.findByIdAndDelete(id);
  const unCompletedTasks = await Task.find({ completed });
  return unCompletedTasks;
};

deleteTaskAndCount("5d8ca62eff1ecf2f4c356a8d", false)
  .then(unCompletedTasks => {
    console.log(unCompletedTasks);
  })
  .catch(e => {
    console.log(e);
  });
