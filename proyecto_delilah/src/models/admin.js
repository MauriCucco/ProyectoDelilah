const sequelize = require("../config/db");

const allInfo = () => sequelize.query("SELECT pe.estado_pedido, pe.fecha, pe.id_pedido, pla.nombre_plato, c.cantidad, pe.tipo_pago, pe.total, u.username, u.nombre_completo, u.email, u.telefono, u.direccion FROM pedidos AS pe JOIN usuarios AS u ON (pe.id_usuario1 = u.id_usuario) JOIN cantidad_platos AS c ON (pe.id_pedido = c.id_pedido1) JOIN platos AS pla ON (c.id_plato1 = pla.id_plato) where pe.estado_pedido = 'nuevo' order by pe.fecha desc;", {type: sequelize.QueryTypes.SELECT });

module.exports = {
    allInfo
}