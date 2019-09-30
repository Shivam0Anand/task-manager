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

app.use((req, res, next) => {
  res.status(503).send("Under Maintainance");
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("we r on port " + port);
});
