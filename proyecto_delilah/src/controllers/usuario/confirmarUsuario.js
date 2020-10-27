const { enableUser } = require("../../models/usuario");
const { jwtClave } = require("../../config/config");
const jwt = require("jsonwebtoken");

const confirmarUsuario = async(req, res) => {

    try {
        
        const { uuid_correo } = jwt.verify(req.query.token, jwtClave);

        if(uuid_correo !== req.query.uuid) throw "El uuid no coincide";

        const [ordenConfirmacion] = await enableUser(uuid_correo);
        
        if(ordenConfirmacion.affectedRows === 0) throw "Error al habilitar usuario";

        res.status(200).send({mensaje: "Usuario habilitado exitósamente"});

    } catch (error) {
        
        console.log(error);

        res.status(500).send({error});
    }
}

module.exports = confirmarUsuario;