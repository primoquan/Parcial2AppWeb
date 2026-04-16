// Con este vamos a validar usuario en la base de datos

  const bcrypt = require('bcryptjs');
  const pool = require('../config/database');

  const findUserByIdentifier = async (identifier) => {
    const query = `
      SELECT * FROM usuarios
      WHERE username = $1 OR correo = $1
      LIMIT 1
    `;
    const { rows } = await pool.query(query, [identifier]);
    return rows[0] || null;
  };

  const validatePassword = async (plain, hashed) => {
    return bcrypt.compare(plain, hashed);
  };

  module.exports = { findUserByIdentifier, validatePassword };