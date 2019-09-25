const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email  ");
      }
    }
  },

  age: {
    type: Number,
    default: 3,
    validate(value) {
      if (value < 2) {
        throw new Error("Age must be greater than 2");
      }
    }
  }
});

const me = new User({
  name: "  shivam  ",
  email: "hello@hello.com"
  // age: 27
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch(error => {
    console.log("Error!", error);
  });

const Task = mongoose.model("Task", {
  discription: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

// const work = new Task({
//   discription: "Kya Pta",
//   completed: false
// });

// work
//   .save()
//   .then(() => {
//     console.log(work);
//   })
//   .catch(() => {
//     console.log(error);
//   });
