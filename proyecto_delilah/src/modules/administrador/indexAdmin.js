const express = require("express");
const admin = express.Router();
const infoAdmin = require("../../controllers/admin/infoAdmin");
const subirPlato = require("../../controllers/admin/subirPlato");
const actualizarPlato = require("../../controllers/admin/actualizarPlato");
const actualizarEstadoPedido = require("../../controllers/admin/actualizarEstadoPedido");
const validarPlato = require("../../middlewares/admin/validarPlato");
const validarEstadoPedido = require("../../middlewares/admin/validarEstadoPedido")

//subrutas de /admin
admin.get("/", infoAdmin);
admin.post("/plato", validarPlato, subirPlato);
admin.put("/plato/:IdPlato",validarPlato, actualizarPlato);
admin.put("/pedido/estado/:IdPedido", validarEstadoPedido, actualizarEstadoPedido);

module.exports = admin;