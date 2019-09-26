mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
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
