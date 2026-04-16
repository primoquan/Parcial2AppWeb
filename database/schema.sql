-- Tablas para usuarios
  CREATE TABLE IF NOT EXISTS usuarios (
    id         SERIAL PRIMARY KEY,
    username   VARCHAR(100) NOT NULL UNIQUE,
    correo     VARCHAR(150) NOT NULL UNIQUE,
    password   VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
  );

  --Tablas para perfil
    CREATE TABLE IF NOT EXISTS perfil (
    id         SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,
    nombre     VARCHAR(100) NOT NULL,
    apellido   VARCHAR(100) NOT NULL,
    edad       INTEGER NOT NULL,
    correo     VARCHAR(150) NOT NULL,
    telefono   VARCHAR(8) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
  );

  