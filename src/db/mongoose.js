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
  password: {
    type: String,
    required: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password should not be password!");
      }
    },
    trim: true
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

// const me = new User({
//   name: "  shivam  ",
//   email: "hello@hello.com",
//   age: 27,
//   password: "Passwordwdw   "
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch(error => {
//     console.log("Error!", error);
//   });

const Task = mongoose.model("Task", {
  discription: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const work = new Task({
  discription: "Kya Pta test 2"
  // completed: false
});

work
  .save()
  .then(() => {
    console.log(work);
  })
  .catch(() => {
    console.log(error);
  });
