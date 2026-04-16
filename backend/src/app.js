// Configuramos express y rutas

  const express = require('express');
  const cors = require('cors');

  const authRoutes = require('./routes/authRoutes');
  const perfilRoutes = require('./routes/perfilRoutes');

  const app = express();

  app.use(cors({ origin: 'http://localhost:4200' }));
  app.use(express.json());

  app.get('/', (req, res) => {
    res.json({ mensaje: 'Conexion a Base de datos funciona' });
  });

  app.use('/auth', authRoutes);
  app.use('/perfil', perfilRoutes);

  module.exports = app;