const crearToken = require("../../models/crearToken");

async function loginUsuario(req, res) {

    const {id_usuario, nombre_completo, direccion, administrador} = req.infoUsuario;

    const token = crearToken({id_usuario, administrador});

    res.status(200).send({mensaje: "Autenticación exitosa", token, nombre_completo, direccion, administrador});
}

module.exports = loginUsuario;