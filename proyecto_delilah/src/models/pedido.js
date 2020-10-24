const sequelize = require("../config/db");

const newOrder = (arrayPedidoNuevo) => sequelize.query("INSERT INTO pedidos (id_usuario1, tipo_pago, total) VALUES (?,?,?)", { replacements: arrayPedidoNuevo, type: sequelize.QueryTypes.INSERT });

const stateOrder = (id_pedido) => sequelize.query("SELECT estado_pedido FROM pedidos WHERE id_pedido = ?", { replacements: [id_pedido], type: sequelize.QueryTypes.SELECT});

const updateOrder = (arrayEstadoPedido) => sequelize.query("UPDATE pedidos SET estado_pedido = ? WHERE id_pedido = ?", { replacements: arrayEstadoPedido });

const deleteOrder = (idPedido, transaction) => sequelize.query("DELETE FROM pedidos WHERE id_pedido = ?", { replacements: [idPedido], transaction });

module.exports = {
    newOrder,
    stateOrder,
    updateOrder,
    deleteOrder
}