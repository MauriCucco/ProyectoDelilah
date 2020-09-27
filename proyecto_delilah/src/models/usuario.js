const sequelize = require("../config/db");

const getInfoUser = (id) => sequelize.query("SELECT nombre_completo, direccion FROM usuarios WHERE id_usuario = ? and estado_usuario = ? and administrador = ?", { replacements: [id, "H", "F"], type: sequelize.QueryTypes.SELECT });

const updateUser = (id, estado) => sequelize.query("UPDATE usuarios SET estado_usuario = ? WHERE id_usuario = ? and administrador = ?", { replacements: [estado, id, "F"]});

module.exports = {
    getInfoUser,
    updateUser
};