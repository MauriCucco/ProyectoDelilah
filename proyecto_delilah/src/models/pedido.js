const sequelize = require("../config/db");

const newOrder = (arrayPedidoNuevo) => sequelize.query("INSERT INTO pedidos (id_usuario1, tipo_pago, total) VALUES (?,?,?)", { replacements: arrayPedidoNuevo, type: sequelize.QueryTypes.INSERT });

const stateOrder = (id_pedido) => sequelize.query("SELECT estado_pedido FROM pedidos WHERE id_pedido = ?", { replacements: [id_pedido], type: sequelize.QueryTypes.SELECT});

module.exports = {
    newOrder,
    stateOrder
}