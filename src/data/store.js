// Almacenamiento en memoria (arreglos)
let tasks = [];
let goals = [];

let idCounter = 1;

const generateId = () => idCounter++;

const getTasks = () => tasks;

const getGoals = () => goals;

const hasTask = (id) => tasks.some((task) => task.id === id);

const hasGoal = (id) => goals.some((goal) => goal.id === id);

const addTask = (task) => {
  const newTask = {
    id: generateId(),
    ...task,
    createdAt: new Date().toISOString()
  };
  tasks.push(newTask);
  return newTask;
};

const addGoal = (goal) => {
  const newGoal = {
    id: generateId(),
    ...goal,
    createdAt: new Date().toISOString()
  };
  goals.push(newGoal);
  return newGoal;
};

const removeTask = (id) => {
  tasks = tasks.filter(task => task.id !== id);
};

const removeGoal = (id) => {
  goals = goals.filter(goal => goal.id !== id);
};

module.exports = {
  getTasks,
  getGoals,
  addTask,
  addGoal,
  removeTask,
  removeGoal,
  hasTask,
  hasGoal
};