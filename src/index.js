// Archivo principal de entrada
require('dotenv').config();
const express = require('express');
const tasksRouter = require('./routes/tasks');
const goalsRouter = require('./routes/goals');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing JSON
app.use(express.json());

// Rutas
app.use('/', tasksRouter);
app.use('/', goalsRouter);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('No se pudo iniciar el backend:', error.message);
    process.exit(1);
  }
};

// Iniciar servidor
startServer();

module.exports = app;