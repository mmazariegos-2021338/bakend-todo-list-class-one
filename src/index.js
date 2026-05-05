// Archivo principal de entrada
const express = require('express');
const tasksRouter = require('./routes/tasks');
const goalsRouter = require('./routes/goals');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing JSON
app.use(express.json());

// Rutas
app.use('/tasks', tasksRouter);
app.use('/goals', goalsRouter);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;