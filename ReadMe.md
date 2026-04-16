# Parcial 2 - Aplicaciones Web
## Luis Quan 201927151

> Este proyecto esta pensado para pruebas locales y usando Supabase como base de datos, libre de cambiar a cualquier otra que utilice PostgreSQL

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
cp .env.example .env   # Copiar plantilla y rellenar con tus informacion de Supabase
npm install
npm run dev     # Corre nuestro servicio en http://localhost:3000
```
> **Importante:** Este proyecto requiere `bcryptjs@2.4.3`. 
> No usar v3 ya que los hashes del seed son incompatibles con esa versión.
> Si ya instalaste una versión mayor, ejecuta:
> ```
> npm uninstall bcryptjs
> npm install bcryptjs@2.4.3
> ```



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

## Problemas conocidos

| Error | Causa | Solución |
|-------|-------|----------|
| "Credenciales incorrectas" al hacer login | Versión de bcryptjs incompatible con los hashes del seed | Instalar `bcryptjs@2.4.3` |
| `ENOTFOUND db.xxx.supabase.co` | Usando conexión directa en vez del pooler | Usar el host del Session Pooler en el `.env` |

