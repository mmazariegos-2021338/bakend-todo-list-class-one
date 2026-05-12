// Rutas para Goals (GET, POST, DELETE)
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { getGoals, addGoal, removeGoal, hasGoal } = require('../data/store');

const isValidGoalPayload = (goal) => {
  if (!goal || typeof goal !== 'object') {
    return false;
  }

  const hasValidTitle = typeof goal.title === 'string' && goal.title.trim() !== '';
  const hasValidTargetDate = typeof goal.targetDate === 'string' && goal.targetDate.trim() !== '';
  return hasValidTitle && hasValidTargetDate;
};

const parseId = (value) => {
  const id = Number(value);
  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }
  return id;
};

router.get('/getGoals', authMiddleware, (req, res) => {
  res.status(200).json({ goals: getGoals() });
});

router.post('/addGoal', authMiddleware, (req, res) => {
  const goal = req.body;
  if (!isValidGoalPayload(goal)) {
    return res.status(400).json({ error: 'Parametros invalidos para crear meta' });
  }

  const newGoal = addGoal(goal);
  res.status(200).json({ message: 'Meta agregada', goal: newGoal });
});

router.delete('/removeGoal', authMiddleware, (req, res) => {
  const id = parseId(req.body?.id);

  if (!id) {
    return res.status(400).json({ error: 'ID de meta invalido' });
  }

  if (!hasGoal(id)) {
    return res.status(400).json({ error: 'La meta no existe' });
  }

  removeGoal(id);
  res.status(200).json({ message: 'Meta eliminada' });
});

module.exports = router;