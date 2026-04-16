// Peticion de login, revisa el usuario y responde exito o error

  const { findUserByIdentifier, validatePassword } = require('../services/authService');

  const login = async (req, res) => {
    const { usuario, password } = req.body;

    if (!usuario || !password) {
      return res.status(400).json({ mensaje: 'Usuario y contraseña son obligatorios' });
    }

    try {
      const user = await findUserByIdentifier(usuario);

      if (!user) {
        return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
      }

      const isValid = await validatePassword(password, user.password);

      if (!isValid) {
        return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
      }

      return res.status(200).json({
        mensaje: 'Login exitoso',
        usuario_id: user.id,
        username: user.username,
      });
    } catch (error) {
      console.error('Error en login:', error);
      return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  };

  module.exports = { login };