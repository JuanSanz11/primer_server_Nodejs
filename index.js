const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
});

module.exports = (req, res) => {
  app(req, res);
};
