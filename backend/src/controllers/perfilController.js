//Controlamos con este el perfil, crear o actualizar, tramos la info de perfil

  const perfilService = require('../services/perfilService');

  const getPerfil = async (req, res) => {
    const { usuario_id } = req.query;
    if (!usuario_id) {
      return res.status(400).json({ mensaje: 'usuario_id es obligatorio' });
    }
    try {
      const perfil = await perfilService.getPerfilByUsuarioId(usuario_id);
      if (!perfil) {
        return res.status(404).json({ mensaje: 'Perfil no encontrado' });
      }
      return res.status(200).json(perfil);
    } catch (error) {
      console.error('Error en getPerfil:', error);
      return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  };

  const createPerfil = async (req, res) => {
    const { usuario_id, nombre, apellido, edad, correo, telefono } = req.body;
    if (!usuario_id || !nombre || !apellido || !edad || !correo || !telefono) {
      return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }
    try {
      const perfil = await perfilService.createPerfil(usuario_id, { nombre, apellido, edad, correo, telefono });
      return res.status(201).json({ mensaje: 'Perfil creado exitosamente', perfil });
    } catch (error) {
      console.error('Error en createPerfil:', error);
      return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  };

  const updatePerfil = async (req, res) => {
    const { usuario_id, nombre, apellido, edad, correo, telefono } = req.body;
    if (!usuario_id || !nombre || !apellido || !edad || !correo || !telefono) {
      return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }
    try {
      const perfil = await perfilService.updatePerfil(usuario_id, { nombre, apellido, edad, correo, telefono });
      if (!perfil) {
        return res.status(404).json({ mensaje: 'Perfil no encontrado para actualizar' });
      }
      return res.status(200).json({ mensaje: 'Perfil actualizado exitosamente', perfil });
    } catch (error) {
      console.error('Error en updatePerfil:', error);
      return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  };

  module.exports = { getPerfil, createPerfil, updatePerfil };