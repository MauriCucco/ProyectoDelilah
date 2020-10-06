const express = require("express");
const pedido = express.Router();
const subirPedido = require("../../controllers/pedido/subirPedido");
const obtenerEstadoPedido = require("../../controllers/pedido/obtenerEstadoPedido")
const validarPedido = require("../../middlewares/pedido/validarPedido");
const validarIdPedido = require("../../middlewares/pedido/validarIdPedido")

//subrutas de /pedidos
pedido.post("/", validarPedido, subirPedido);
pedido.post("/estado", validarIdPedido, obtenerEstadoPedido);

module.exports = pedido;