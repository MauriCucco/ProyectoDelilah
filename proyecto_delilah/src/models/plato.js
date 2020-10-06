const sequelize = require("../config/db");

const getAllPlates = () => sequelize.query("SELECT id_plato, nombre_plato, precio FROM platos", { type: sequelize.QueryTypes.SELECT });

const favoritePlates = (id_usuario) => sequelize.query("SELECT COUNT(*) AS cantidad_pedido, pl.nombre_plato, pl.precio FROM pedidos AS pe JOIN cantidad_platos AS c ON (pe.id_pedido = c.id_pedido1) JOIN platos AS pl ON (c.id_plato1 = pl.id_plato) WHERE pe.id_usuario1 = ? GROUP BY pl.id_plato HAVING COUNT(cantidad_pedido) > 3", { replacements: [id_usuario], type: sequelize.QueryTypes.SELECT });

const uploadPlate = (nuevoPlato) => sequelize.query("INSERT INTO platos (nombre_plato, precio) VALUES (?,?)", { replacements: nuevoPlato, type: sequelize.QueryTypes.INSERT });

module.exports = {
    getAllPlates,
    favoritePlates,
    uploadPlate
}