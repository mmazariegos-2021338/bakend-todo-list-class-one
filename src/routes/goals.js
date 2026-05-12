// Rutas para Goals (GET, POST, DELETE)
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const Goal = require('../models/Goal');

router.get('/getGoals', authMiddleware, async (req, res) => {
  try {
    const goals = await Goal.find().sort({ createdAt: -1 });
    res.json({ goals });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener metas' });
  }
});

router.post('/addGoal', authMiddleware, async (req, res) => {
  try {
    const goal = await Goal.create(req.body);
    res.status(201).json({ message: 'Meta agregada', goal });
  } catch (error) {
    res.status(400).json({ error: 'No se pudo agregar la meta', details: error.message });
  }
});

router.delete('/removeGoal', authMiddleware, async (req, res) => {
  const { id } = req.body;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'ID de meta invalido' });
  }

  try {
    const deletedGoal = await Goal.findByIdAndDelete(id);

    if (!deletedGoal) {
      return res.status(404).json({ error: 'Meta no encontrada' });
    }

    res.json({ message: 'Meta eliminada', goal: deletedGoal });
  } catch (error) {
    res.status(500).json({ error: 'No se pudo eliminar la meta' });
  }
});

module.exports = router;