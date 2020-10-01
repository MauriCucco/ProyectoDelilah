const { request } = require("express");
const express = require("express");
const admin = express.Router();
const infoAdmin = require("../../controllers/admin/infoAdmin");

//subrutas de /admin
admin.get("/", infoAdmin);
//admin.post("/plato", subirPlato);
//admin.put("/plato/:IdPlato", actualizarPlato);
//admin.put("/pedido/:IdPlato", actualizarPedido);

module.exports = admin;