// Este nos verificara el perfil en la BD

  const pool = require('../config/database');

  const getPerfilByUsuarioId = async (usuario_id) => {
    const query = 'SELECT * FROM perfil WHERE usuario_id = $1 LIMIT 1';
    const { rows } = await pool.query(query, [usuario_id]);
    return rows[0] || null;
  };

  const createPerfil = async (usuario_id, { nombre, apellido, edad, correo, telefono }) => {
    const query = `
      INSERT INTO perfil (usuario_id, nombre, apellido, edad, correo, telefono)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;
    const { rows } = await pool.query(query, [usuario_id, nombre, apellido, edad, correo, telefono]);
    return rows[0];
  };

  const updatePerfil = async (usuario_id, { nombre, apellido, edad, correo, telefono }) => {
    const query = `
      UPDATE perfil
      SET nombre = $1, apellido = $2, edad = $3, correo = $4, telefono = $5, updated_at = NOW()
      WHERE usuario_id = $6
      RETURNING *
    `;
    const { rows } = await pool.query(query, [nombre, apellido, edad, correo, telefono, usuario_id]);
    return rows[0];
  };

  module.exports = { getPerfilByUsuarioId, createPerfil, updatePerfil };