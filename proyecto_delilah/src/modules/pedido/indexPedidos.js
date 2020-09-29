const express = require("express");
const pedido = express.Router();
const subirPedido = require("../../controllers/pedido/subirPedido");
const obtenerEstadoPedido = require("../../controllers/pedido/obtenerEstadoPedido")
const validarPedido = require("../../middlewares/pedido/validarPedido");

//subrutas de /pedidos
pedido.post("/", validarPedido, subirPedido);
pedido.get("/estado/:IdPedido", obtenerEstadoPedido);

module.exports = pedido;