SERVIDOR Y REQUISICIONES

El primer desafio es crear un servidor que permita a los usuarios crear, obtener, guardar y eliminar un nuevo curso.

Fundamentos de Node.js

SSR: Server Side Rendering
SPA: Single Page Application
CSR: Client Side Rendering

-Browser(Client) /usuarios
-API(Server)
[
  {name="Juan",idade:30},
  {name="Daniela",idade:28},
]
-Mobile-Web

https://api.meuapp.com/users/32?posts=true

https:// => PROTOCOLO
api => Subdominio
meuapp.com => Dominio
users => Recurso
32 => Identificador / Parámetro
?posts=true => Parámetro de busqueda (search/query param)


Aplicación web (Front-end) <-> Servidor (Back-end) <-> Banco de Datos (Database)


BACK_END: (Postgree, SQL,...)
FRONT_END: Construcción de interface (React Native,Vue, Angular, Polymer, Flutter, Kotlin, Svelte, Swift...)
JSON: JavaScript Object Notation
API: Application Programming Interface
REST: Representational State Transfer
HTTP: Hypertext Transfer Protocol
URL: Uniform Resource Locator
CRUD: Create, Read, Update, Delete


METODOS HTTP

GET/POST/OUT/PATCH/DELETE/HEAD

Route Param => Identificar recursos (obligatorio)
Search/Query Param => modificar/filtrar  (No son obligatorios)

POST localhost:3333/users
Request Body => Datos para creación/ actualización de un recurso (Obligatorio o opcional)

Headers: envia metadatos, informaciones que no alteran el resultado/funcionamiento. 


HTTP status Code

2xx= Suceso
3xx= Redireccionamiento
4xx= error del cliente 
5xx= Error de servidor/API

201= Recurso creado (POST)
202= Aceptado (PUT/PATCH)
204= Sin retorno
418= Im a teapot


Comandos

VSCode: RestClient Tools
Install Node.js
npm i
npm init -y
npm i fastify
npm i typescript @types/node -D
npm run dev