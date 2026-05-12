// Rutas para Tasks (GET, POST, DELETE)
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { getTasks, addTask, removeTask, hasTask } = require('../data/store');

const isValidTaskPayload = (task) => {
  if (!task || typeof task !== 'object') {
    return false;
  }

  const hasValidTitle = typeof task.title === 'string' && task.title.trim() !== '';
  const hasValidDueDate = typeof task.dueDate === 'string' && task.dueDate.trim() !== '';
  return hasValidTitle && hasValidDueDate;
};

const parseId = (value) => {
  const id = Number(value);
  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }
  return id;
};

router.get('/getTasks', authMiddleware, (req, res) => {
  res.status(200).json({ tasks: getTasks() });
});

router.post('/addTask', authMiddleware, (req, res) => {
  const task = req.body;
  if (!isValidTaskPayload(task)) {
    return res.status(400).json({ error: 'Parametros invalidos para crear tarea' });
  }

  const newTask = addTask(task);
  res.status(200).json({ message: 'Tarea agregada', task: newTask });
});

router.delete('/removeTask', authMiddleware, (req, res) => {
  const id = parseId(req.body?.id);

  if (!id) {
    return res.status(400).json({ error: 'ID de tarea invalido' });
  }

  if (!hasTask(id)) {
    return res.status(400).json({ error: 'La tarea no existe' });
  }

  removeTask(id);
  res.status(200).json({ message: 'Tarea eliminada' });
});

module.exports = router;