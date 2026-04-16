# Parcial 2 - Apliaciones Web
## Luis Quan 201927151


## Estructura del proyecto

```
Parcial2AppWeb/
├── database/         → Scripts SQL
├── backend/          → API REST en Node.js
└── frontend/         → App Angular
```

---

## Requisitos

- Node.js instalado
- Angular CLI instalado (`npm install -g @angular/cli`)
- Base de datos PostgreSQL (Para este proyecto utilizaremos Supabase)

---

## Clonar el repositorio

```bash
git clone https://github.com/primoquan/Parcial2AppWeb
cd Parcial2AppWeb
```

---

## Pasos para crear el proyecto

### 1. Base de datos

- En Supabase vamos a nuestra BD en este caso se llama "Parcial2AppWeb", y vamos al SQL Editor.
- Ejecutamos los scripts en orden:
```
database/schema.sql   → crea las tablas (usuarios y perfil)
database/seed.sql     → creamos los usuarios de Test para hacer pruebas
```

### 2. Backend

```bash
cd backend
npm install
npm run dev     # Corre nuestro servicio en http://localhost:3000
```

### 3. Frontend
```bash
cd frontend
npm install
ng serve        # levanta en http://localhost:4200
```

Abrir el navegador en: **http://localhost:4200**

---

## Usuarios de prueba

Todos tienen la misma contraseña: **`123456`**

| Usuario | Correo |
|---------|--------|
| admin | admin@test.com |
| usuario1 | usuario1@test.com |
| usuario2 | usuario2@test.com |
| ... | ... |
| usuario10 | usuario10@test.com |

---

## Endpoints de la API

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/` | Verificar que la API está activa |
| POST | `/auth/login` | Iniciar sesión |
| GET | `/perfil?usuario_id=X` | Obtener perfil |
| POST | `/perfil` | Crear perfil |
| PUT | `/perfil` | Actualizar perfil |

---

