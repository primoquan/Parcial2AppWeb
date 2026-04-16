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

## Pasos para crear el proyecto

### 1. Base de datos

- En Supabase vamos a nuestra BD en este caso se llama "Parcial2AppWeb", y vamos al SQL Editor.
- Ejecutamos los scripts en orden:
```
database/schema.sql   → crea las tablas (usuarios y perfil)
database/seed.sql     → creamos los usuarios de Test para hacer pruebas
```

