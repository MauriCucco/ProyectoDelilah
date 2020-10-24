const sequelize = require("../config/db");

const newDishesNumber = (registroNuevo) => sequelize.query("INSERT INTO cantidad_platos (id_plato1, cantidad, id_pedido1) VALUES (?,?,?)", { replacements: registroNuevo, type: sequelize.QueryTypes.INSERT });

const deletePlatesAmount = (idPedido1, transaction) => sequelize.query("DELETE FROM cantidad_platos WHERE id_pedido1 = ?", { replacements: [idPedido1], transaction });

module.exports = {
    newDishesNumber,
    deletePlatesAmount
}