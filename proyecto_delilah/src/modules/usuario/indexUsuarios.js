const express = require("express");
const usuario = express.Router();
const obtenerInfoUsuario = require("../../controllers/usuario/obtenerInfoUsuario");
const actualizarUsuario = require("../../controllers/usuario/actualizarUsuario")

//subrutas de /usuarios
usuario.get("/:IdUsuario", obtenerInfoUsuario);
usuario.put("/:IdUsuario", actualizarUsuario);
//usuario.post("/registro", crearUsuario);
//usuario.post("/login", loginUsuario);

module.exports = usuario;

