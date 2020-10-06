const jwt = require("jsonwebtoken");
const { jwtClave } = require("../../config/config")

function loginUsuario(req, res) {

    const {id_usuario, administrador} = req.body;

    const token = jwt.sign({
        check: true,
        id_usuario,
        administrador
    }, jwtClave);

    res.status(200).send({mensaje: "Autenticación exitosa", token, id_usuario, administrador});
}

module.exports = loginUsuario;