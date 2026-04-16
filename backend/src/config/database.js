//Conexion a nuestra base de datos de PostgreSQL en Supabase

  const { Pool } = require('pg');

  const pool = new Pool({
    host:     process.env.DB_HOST,
    port:     process.env.DB_PORT,
    database: process.env.DB_NAME,
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl:      { rejectUnauthorized: false },
  });

  module.exports = pool;