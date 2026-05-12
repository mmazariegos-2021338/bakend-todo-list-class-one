# ToDo List - Backend

Backend para llevar el control de Tareas y Metas personales (ToDo List), construido con Node.js y Express.

## Descripción

Esta aplicación permite crear, consultar y eliminar tareas y metas personales con persistencia en MongoDB.

## Requisitos

- Node.js LTS (versión 18.x o superior)
- npm
- MongoDB (local o Atlas)

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

3. Crear archivo `.env` usando `.env.example`:

```bash
cp .env.example .env
```

## Ejecutar el proyecto

```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`

> La conexión a MongoDB se realiza al iniciar el backend.  
> Si falla la conexión, el servidor no arranca.

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

## Variables de entorno

- `PORT`: puerto del servidor (default `3000`)
- `API_KEY`: valor esperado en header `Authorization`
- `MONGODB_URI`: cadena de conexión de MongoDB

## Ejemplos de payloads

### POST /addTask

```json
{
  "title": "Terminar actividad de backend",
  "description": "Crear endpoints con persistencia",
  "dueDate": "2026-05-27T00:00:00.000Z",
  "completed": false
}
```

### POST /addGoal

```json
{
  "title": "Completar Unidad V",
  "description": "Entregar repositorio con CRUD funcional",
  "targetDate": "2026-05-27T00:00:00.000Z"
}
```

### DELETE /removeTask y /removeGoal

```json
{
  "id": "681ff4b8ae3f78f8f88db6c1"
}
```