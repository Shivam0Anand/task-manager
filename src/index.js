const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", (req, res) => {
  req;
  res.send("test!");
});

app.listen(port, () => {
  console.log("we r on port " + port);
});
