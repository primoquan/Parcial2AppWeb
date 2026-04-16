//Definimos get post y put

  const { Router } = require('express');
  const { getPerfil, createPerfil, updatePerfil } = require('../controllers/perfilController');

  const router = Router();

  router.get('/', getPerfil);
  router.post('/', createPerfil);
  router.put('/', updatePerfil);

  module.exports = router;