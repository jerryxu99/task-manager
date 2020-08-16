require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5eeff9b9a741e7604528c3c3').then((task) => {
//   console.log(task);
//   return Task.countDocuments({ completed: false });
// }).then((result) => {
//   console.log(result);
// }).catch((e) => {
//   console.log(e);
// });

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('5effd1a915e3450ea9d523ce').then((count) => {
  console.log(count);
}).catch((e) => {
  console.log(e);
});
