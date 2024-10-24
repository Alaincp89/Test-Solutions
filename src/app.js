require('dotenv').config();
const express = require('express');
const db = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);

// Base de datos
db.authenticate()
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.log('Error al conectar a la base de datos:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
