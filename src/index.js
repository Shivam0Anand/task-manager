const express = require("express");
require("./db/mongoose.js");
const userRouter = require("./router/user");
const taskRouter = require("./router/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("Get request disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Under Maintainance");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("we r on port " + port);
});

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//   const user = await User.findById("5d9798dd3546b42ae881553d");

//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// main();
