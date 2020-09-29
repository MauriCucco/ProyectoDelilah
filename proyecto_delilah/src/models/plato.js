const sequelize = require("../config/db");

const getAllPlatos = () => sequelize.query("SELECT id_plato, nombre_plato, precio FROM platos", { type: sequelize.QueryTypes.SELECT });

module.exports = {
    getAllPlatos
}