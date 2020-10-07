const sequelize = require("../config/db");

const deleteUser = (id) => sequelize.query("UPDATE usuarios SET estado_usuario = 'E' WHERE id_usuario = ? and administrador = ?", { replacements: [id, "F"]});

const newUser = (arrayUsuarioNuevo) => sequelize.query("INSERT INTO usuarios (username, nombre_completo, email, telefono, direccion, password) VALUES (?,?,?,?,?,MD5(?))", { replacements: arrayUsuarioNuevo, type: sequelize.QueryTypes.INSERT });

const verifyUser = (username, email) => sequelize.query("SELECT username, email FROM usuarios WHERE username = ? and email = ?", { replacements: [username, email], type: sequelize.QueryTypes.SELECT });

const validateUser = (username_o_email, password) => sequelize.query("SELECT id_usuario, nombre_completo, direccion, administrador FROM usuarios WHERE (username = ? OR email = ?) AND password = MD5(?)", { replacements: [username_o_email, username_o_email, password], type: sequelize.QueryTypes.SELECT });

module.exports = {
    deleteUser,
    newUser,
    verifyUser,
    validateUser
};