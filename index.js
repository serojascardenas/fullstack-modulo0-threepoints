'use strict';

const express = require('express');
const cowsay = require("cowsay");

// Constants
const PORT = 8080;

// App
const app = express();

app.get("/", function (req, res) {
  res.redirect("/Módulo 0 - Curso Nivelador - Sonia Rojas!");
});

app.get("/:text", function (req, res) {
  let text;

  try {
    text = req.params.text;
  } catch (e) {
    text = "Error: Módulo 0 - Curso Nivelador";
  }
  const responseText = `
    <pre>${cowsay.say({ text })}</pre>
    <br/><br/>
  `;

  res.send(responseText);
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));