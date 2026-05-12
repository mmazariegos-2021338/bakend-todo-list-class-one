// Middleware de autenticación por API Key
const API_KEY = process.env.API_KEY || 'my-api-key';

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header requerido' });
  }

  if (authHeader !== API_KEY) {
    return res.status(401).json({ error: 'API key invalida' });
  }

  next();
};

module.exports = authMiddleware;