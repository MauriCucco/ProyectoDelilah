const sequelize = require("../config/db");

const getInfoUser = (id) => sequelize.query("SELECT nombre_completo, direccion FROM usuarios WHERE id_usuario = ? and estado_usuario = ? and administrador = ?", { replacements: [id, "H", "F"], type: sequelize.QueryTypes.SELECT });

const updateUser = (id, estado) => sequelize.query("UPDATE usuarios SET estado_usuario = ? WHERE id_usuario = ? and administrador = ?", { replacements: [estado, id, "F"]});

const newUser = (arrayUsuarioNuevo) => sequelize.query("INSERT INTO usuarios (username, nombre_completo, email, telefono, direccion, password) VALUES (?,?,?,?,?,?)", { replacements: arrayUsuarioNuevo, type: sequelize.QueryTypes.INSERT });

const verifyUser = (username, email) => sequelize.query("SELECT username, email FROM usuarios WHERE username = ? and email = ?", { replacements: [username, email], type: sequelize.QueryTypes.SELECT });

const validateUser = (username_o_email, password) => sequelize.query("SELECT id_usuario, administrador FROM usuarios WHERE (username = ? OR email = ?) AND password = ?", { replacements: [username_o_email, username_o_email, password], type: sequelize.QueryTypes.SELECT });

module.exports = {
    getInfoUser,
    updateUser,
    newUser,
    verifyUser,
    validateUser
};