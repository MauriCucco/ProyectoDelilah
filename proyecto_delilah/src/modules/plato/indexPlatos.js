const express = require("express");
const plato = express.Router();
const obtenerPlatos = require("../../controllers/plato/obtenerPlatos");
const obtenerPlatosFavoritos = require("../../controllers/plato/obtenerPlatosFavoritos")

//subrutas de /platos
plato.get("/", obtenerPlatos);
plato.get("/favoritos", obtenerPlatosFavoritos);

module.exports = plato;