const usuario = require("../modules/indexUsuarios");
const pedido = require("../modules/indexPedidos");
const plato = require("../modules/indexPlatos");
const admin = require("../modules/indexAdmin");
const verificarAdmin = require("../middlewares/admin/verificarAdmin"); //para verificar que el usuario sea administrador

//RUTAS PRINCIPALES
module.exports = function (app) {
  app.use("/usuarios", usuario);
  app.use("/pedidos", pedido);
  app.use("/platos", plato);
  app.use("/admin", verificarAdmin, admin);
};
