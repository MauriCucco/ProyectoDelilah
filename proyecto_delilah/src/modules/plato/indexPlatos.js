const express = require("express");
const plato = express.Router();
const obtenerPlatos = require("../../controllers/plato/obtenerPlatos");

//subrutas de /platos
plato.get("/", obtenerPlatos);
//plato.get("/favoritos/:IdCliente", obtenerPlatosFav);

module.exports = plato;