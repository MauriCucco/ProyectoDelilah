const { crearToken } = require("../../models/crearToken");

const loginUsuario = (req, res) => {
    try {

        const {id_usuario, nombre_completo, direccion, administrador} = req.infoUsuario;
    
        const token = crearToken({id_usuario, administrador});
    
        res.status(200).send({mensaje: "Autenticación exitosa", token, nombre_completo, direccion});
        
    } catch (error) {
        
        res.status(500).send({error});
    }
}

module.exports = loginUsuario;