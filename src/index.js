const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled');
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send('Website is in maintenance, please check again later');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
  // const task = await Task.findById('5f9ba3553de4ed486a1f25d3');
  // await task.populate('owner').execPopulate();
  // console.log(task.owner);

  const user = await User.findById('5f9ba22977a6e0482d4ab317');
  await user.populate('tasks').execPopulate();
  console.log(user.tasks);
};

main();
