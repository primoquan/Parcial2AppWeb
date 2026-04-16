--Usuarios y contraseñas las contraseñas son todas 123456 por temas de pruebas
--

  INSERT INTO usuarios (username, correo, password) VALUES
    ('admin',     'admin@test.com',     '$2a$10$1A9aMFNmIZNMmPRef1tHM.VepryHaD7BG.SH5joxmt5WgFFnWGRa.),
    ('usuario1',  'usuario1@test.com',  '$2a$10$1A9aMFNmIZNMmPRef1tHM.VepryHaD7BG.SH5joxmt5WgFFnWGRa.),
    ('usuario2',  'usuario2@test.com',  '$2a$10$1A9aMFNmIZNMmPRef1tHM.VepryHaD7BG.SH5joxmt5WgFFnWGRa.),
    ('usuario3',  'usuario3@test.com',  '$2a$10$1A9aMFNmIZNMmPRef1tHM.VepryHaD7BG.SH5joxmt5WgFFnWGRa.),
    ('usuario4',  'usuario4@test.com',  '$2a$10$1A9aMFNmIZNMmPRef1tHM.VepryHaD7BG.SH5joxmt5WgFFnWGRa.),
    ('usuario5',  'usuario5@test.com',  '$2a$10$1A9aMFNmIZNMmPRef1tHM.VepryHaD7BG.SH5joxmt5WgFFnWGRa.),
    ('usuario6',  'usuario6@test.com',  '$2a$10$1A9aMFNmIZNMmPRef1tHM.VepryHaD7BG.SH5joxmt5WgFFnWGRa.),
    ('usuario7',  'usuario7@test.com',  '$2a$10$1A9aMFNmIZNMmPRef1tHM.VepryHaD7BG.SH5joxmt5WgFFnWGRa.),
    ('usuario8',  'usuario8@test.com',  '$2a$10$1A9aMFNmIZNMmPRef1tHM.VepryHaD7BG.SH5joxmt5WgFFnWGRa.),
    ('usuario9',  'usuario9@test.com',  '$2a$10$1A9aMFNmIZNMmPRef1tHM.VepryHaD7BG.SH5joxmt5WgFFnWGRa.),
    ('usuario10', 'usuario10@test.com', '$2a$10$1A9aMFNmIZNMmPRef1tHM.VepryHaD7BG.SH5joxmt5WgFFnWGRa.)
  ON CONFLICT (username) DO NOTHING;
