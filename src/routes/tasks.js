// Rutas para Tasks (GET, POST, DELETE)
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { getTasks, addTask, removeTask } = require('../data/store');

router.get('/getTasks', authMiddleware, (req, res) => {
  res.json({ tasks: getTasks() });
});

router.post('/addTask', authMiddleware, (req, res) => {
  const task = req.body;
  addTask(task);
  res.json({ message: 'Tarea agregada', task });
});

router.delete('/removeTask', authMiddleware, (req, res) => {
  const { id } = req.body;
  removeTask(id);
  res.json({ message: 'Tarea eliminada' });
});

module.exports = router;