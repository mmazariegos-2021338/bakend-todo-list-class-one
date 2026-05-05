# ToDo List - Backend

Backend para llevar el control de Tareas y Metas personales (ToDo List), construido con Node.js y Express.

## Descripción

Esta aplicación permite agregar y eliminar tareas y metas personales. Los datos se manejan en memoria (no persisten en una base de datos).

## Requisitos

- Node.js LTS (versión 18.x o superior)
- npm

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

## Ejecutar el proyecto

```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`

## Endpoints

| Método | Endpoint | Descripción |
|--------|----------|------------|
| GET | /getTasks | Obtener todas las tareas |
| GET | /getGoals | Obtener todas las metas |
| POST | /addTask | Agregar una nueva tarea |
| POST | /addGoal | Agregar una nueva meta |
| DELETE | /removeTask | Eliminar una tarea |
| DELETE | /removeGoal | Eliminar una meta |

## Autenticación

Todos los endpoints requieren un header `Authorization` con una API key válida.

## Configuración de API Key

La API key debe configurarse en las variables de entorno (`process.env.API_KEY`).