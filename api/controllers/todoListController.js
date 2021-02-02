'use strict';

const mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_tasks = (req, res) => {
  Task.find({}, function (err, task) {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
}

// exports.list_all_tasks = function (req, res) {
//   Task.find({}, function (err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };

// exports.create_a_task = (req, res) => {
//   const new_task = new Task(req.body);
//   new_task.save()
// }
