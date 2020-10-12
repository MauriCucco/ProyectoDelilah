const express = require("express");
const admin = express.Router();
const infoAdmin = require("../../controllers/admin/infoAdmin");
const subirPlato = require("../../controllers/admin/subirPlato");
const actualizarPlato = require("../../controllers/admin/actualizarPlato");
const eliminarPlato = require("../../controllers/admin/eliminarPlato");
const actualizarEstadoPedido = require("../../controllers/admin/actualizarEstadoPedido");
const eliminarPedido = require("../../controllers/admin/eliminarPedido");
const validarPlato = require("../../middlewares/admin/validarPlato");
const validarEstadoPedido = require("../../middlewares/admin/validarEstadoPedido")

//subrutas de /admin
admin.get("/", infoAdmin);
admin.post("/plato", validarPlato, subirPlato);
admin.put("/plato/:IdPlato", validarPlato, actualizarPlato);
admin.delete("/plato/:IdPlato", eliminarPlato);
admin.put("/pedido/estado/:IdPedido", validarEstadoPedido, actualizarEstadoPedido);
admin.delete("/pedido/:IdPedido", eliminarPedido);

module.exports = admin;