# 🚀 Mi Primer Servidor con Node.js

El primer desafío es crear un servidor que permita a los usuarios **crear**, **obtener**, **guardar** y **eliminar** un curso.

---

## 🧠 Fundamentos de Node.js

- **SSR**: Server Side Rendering  
- **SPA**: Single Page Application  
- **CSR**: Client Side Rendering  

---

## 🌐 Arquitectura

Browser (Cliente) → /usuarios API (Servidor) → [ { name: "Juan", idade: 30 }, { name: "Daniela", idade: 28 } ] Mobile / Web

---

## 🔍 Anatomía de una URL

https://api.meuapp.com/users/32?posts=true

- `https://` → **Protocolo**
- `api` → **Subdominio**
- `meuapp.com` → **Dominio**
- `users` → **Recurso**
- `32` → **Identificador / Parámetro**
- `?posts=true` → **Parámetro de búsqueda (query param)**

---

## 🧩 Flujo de Aplicación

---

## 🛠️ Tecnologías

- **Back-end**: PostgreSQL, SQL...
- **Front-end**: React Native, Vue, Angular, Polymer, Flutter, Kotlin, Svelte, Swift...
- **JSON**: JavaScript Object Notation
- **API**: Application Programming Interface
- **REST**: Representational State Transfer
- **HTTP**: Hypertext Transfer Protocol
- **URL**: Uniform Resource Locator
- **CRUD**: Create, Read, Update, Delete

---

## 📡 Métodos HTTP

- `GET` / `POST` / `PUT` / `PATCH` / `DELETE` / `HEAD`

### 🧭 Tipos de Parámetros

- **Route Param** → Identifica recursos (obligatorio)
- **Query Param** → Modifica o filtra recursos (opcional)

### 📨 Request Body

Datos enviados para crear o actualizar un recurso (obligatorio o opcional).

### 📋 Headers

Metadatos que no alteran el resultado o funcionamiento de la solicitud.

---

## ✅ Códigos de Estado HTTP

- `2xx` → Éxito
- `3xx` → Redirección
- `4xx` → Error del cliente
- `5xx` → Error del servidor/API

### Ejemplos:

- `201` → Recurso creado (POST)
- `202` → Aceptado (PUT/PATCH)
- `204` → Sin retorno
- `418` → I'm a teapot ☕

---

## 🧰 Herramientas y Dependencias

- **Editor**: VSCode + RestClient Tools
- **Runtime**: Node.js

### 📦 Instalación de dependencias

```bash
npm init -y
npm install fastify
npm install typescript @types/node -D
npm install --save-dev pino-pretty
npm run dev
