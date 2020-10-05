const { request } = require("express");
const express = require("express");
const admin = express.Router();
const infoAdmin = require("../../controllers/admin/infoAdmin");
const subirPlato = require("../../controllers/admin/subirPlato");
const actualizarPlato = require("../../controllers/admin/actualizarPlato");
const actualizarEstadoPedido = require("../../controllers/admin/actualizarEstadoPedido");

//subrutas de /admin
admin.get("/", infoAdmin);
admin.post("/plato", subirPlato);
admin.put("/plato/:IdPlato", actualizarPlato);
admin.put("/pedido/estado/:IdPedido", actualizarEstadoPedido);

module.exports = admin;