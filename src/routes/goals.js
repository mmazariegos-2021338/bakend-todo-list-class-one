// Rutas para Goals (GET, POST, DELETE)
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { getGoals, addGoal, removeGoal } = require('../data/store');

router.get('/getGoals', authMiddleware, (req, res) => {
  res.json({ goals: getGoals() });
});

router.post('/addGoal', authMiddleware, (req, res) => {
  const goal = req.body;
  addGoal(goal);
  res.json({ message: 'Meta agregada', goal });
});

router.delete('/removeGoal', authMiddleware, (req, res) => {
  const { id } = req.body;
  removeGoal(id);
  res.json({ message: 'Meta eliminada' });
});

module.exports = router;