const usuario = require("../modules/usuario/indexUsuarios");
const pedido = require("../modules/pedido/indexPedidos");
const plato = require("../modules/plato/indexPlatos")
const admin = require("../modules/administrador/indexAdmin");

//RUTAS PRINCIPALES
module.exports = function(app) {
    
    app.use("/usuarios", usuario);
    app.use("/pedidos", pedido);
    app.use("/platos", plato);
    app.use("/admin", admin);
}