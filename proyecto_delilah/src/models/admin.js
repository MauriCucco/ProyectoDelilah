const sequelize = require("../config/db");

const allInfo = () => sequelize.query("SELECT pe.estado_pedido, pe.fecha, pe.id_pedido, pla.nombre_plato, c.cantidad, pe.tipo_pago, pe.total, u.username, u.nombre_completo, u.email, u.telefono, u.direccion FROM pedidos AS pe JOIN usuarios AS u ON (pe.id_usuario1 = u.id_usuario) JOIN cantidad_platos AS c ON (pe.id_pedido = c.id_pedido1) JOIN platos AS pla ON (c.id_plato1 = pla.id_plato) WHERE pe.estado_pedido != 'entregado' OR pe.estado_pedido != 'cancelado' ORDER BY pe.fecha DESC;", {type: sequelize.QueryTypes.SELECT });

const uploadPlate = (arrayNuevoPlato) => sequelize.query("INSERT INTO platos (nombre_plato, precio) VALUES (?,?)", { replacements: arrayNuevoPlato, type: sequelize.QueryTypes.INSERT });

const updatePlate = (arrayPlatoActualizado) => sequelize.query("UPDATE platos SET nombre_plato = ?, precio = ?, estado_plato = ? WHERE id_plato = ?", { replacements: arrayPlatoActualizado });

const updateOrder = (arrayEstadoPedido) => sequelize.query("UPDATE pedidos SET estado_pedido = ? WHERE id_pedido = ?", { replacements: arrayEstadoPedido });

module.exports = {
    allInfo,
    uploadPlate,
    updatePlate,
    updateOrder
}