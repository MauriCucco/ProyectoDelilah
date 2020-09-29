const express = require("express");
const usuario = express.Router();
const obtenerInfoUsuario = require("../../controllers/usuario/obtenerInfoUsuario");
const actualizarUsuario = require("../../controllers/usuario/actualizarUsuario");
const crearUsuario = require("../../controllers/usuario/crearUsuario");
const loginUsuario = require("../../controllers/usuario/loginUsuario");
const validarEstado = require("../../middlewares/usuario/validarEstado");
const verificarUsuarioNuevo = require("../../middlewares/usuario/verificarUsuarioNuevo");
const validarUsuario = require("../../middlewares/usuario/validarUsuario");

//subrutas de /usuarios
usuario.get("/:IdUsuario", obtenerInfoUsuario);
usuario.put("/:IdUsuario", validarEstado, actualizarUsuario);
usuario.post("/registro", verificarUsuarioNuevo, crearUsuario);
usuario.post("/login", validarUsuario, loginUsuario);

module.exports = usuario;

