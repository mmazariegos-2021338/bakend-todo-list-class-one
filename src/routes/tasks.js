// Rutas para Tasks (GET, POST, DELETE)
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const Task = require('../models/Task');

router.get('/getTasks', authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json({ tasks });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tareas' });
  }
});

router.post('/addTask', authMiddleware, async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ message: 'Tarea agregada', task });
  } catch (error) {
    res.status(400).json({ error: 'No se pudo agregar la tarea', details: error.message });
  }
});

router.delete('/removeTask', authMiddleware, async (req, res) => {
  const { id } = req.body;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'ID de tarea invalido' });
  }

  try {
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    res.json({ message: 'Tarea eliminada', task: deletedTask });
  } catch (error) {
    res.status(500).json({ error: 'No se pudo eliminar la tarea' });
  }
});

module.exports = router;