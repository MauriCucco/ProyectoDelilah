const sequelize = require("../config/db");

const newDishesNumber = (registroNuevo) => sequelize.query("INSERT INTO cantidad_platos (id_plato1, cantidad, id_pedido1) VALUES (?,?,?)", { replacements: registroNuevo, type: sequelize.QueryTypes.INSERT });


module.exports = {
    newDishesNumber
}