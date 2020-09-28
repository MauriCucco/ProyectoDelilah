const express = require("express");
const usuario = express.Router();
const obtenerInfoUsuario = require("../../controllers/usuario/obtenerInfoUsuario");
const actualizarUsuario = require("../../controllers/usuario/actualizarUsuario");
const crearUsuario = require("../../controllers/usuario/crearUsuario");
const validarEstado = require("../../middlewares/usuario/validarEstado");
const verificarUsuario = require("../../middlewares/usuario/verificarUsuario");

//subrutas de /usuarios
usuario.get("/:IdUsuario", obtenerInfoUsuario);
usuario.put("/:IdUsuario", validarEstado, actualizarUsuario);
usuario.post("/registro", verificarUsuario, crearUsuario);
//usuario.post("/login", loginUsuario);

module.exports = usuario;

