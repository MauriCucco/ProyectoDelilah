const express = require("express");
const usuario = express.Router();
const eliminarUsuario = require("../../controllers/usuario/eliminarUsuario");
const crearUsuario = require("../../controllers/usuario/crearUsuario");
const loginUsuario = require("../../controllers/usuario/loginUsuario");
const verificarUsuarioNuevo = require("../../middlewares/usuario/verificarUsuarioNuevo");
const validarUsuario = require("../../middlewares/usuario/validarUsuario");

//subrutas de /usuarios
usuario.put("/delete", eliminarUsuario); //borrado lógico
usuario.post("/registro", verificarUsuarioNuevo, crearUsuario);
usuario.post("/login", validarUsuario, loginUsuario);

module.exports = usuario;

