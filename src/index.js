const express = require("express");
require("./db/mongoose.js");
const userRouter = require("./router/user");
const taskRouter = require("./router/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("we r on port " + port);
});

const bcrypt = require("bcrypt");

const pass = async () => {
  const password = "hello!123";
  const incryptPass = await bcrypt.hash(password, 8);

  console.log(password);
  console.log(incryptPass);
};

pass();
