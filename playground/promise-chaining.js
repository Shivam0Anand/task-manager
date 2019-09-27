require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("5d8b1fa31fd16f15b8c49b21", { age: 3 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 3 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5d8b1fa31fd16f15b8c49b21", 10)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
