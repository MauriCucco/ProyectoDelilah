const { updateUser } = require("../../models/usuario");

const eliminarUsuario = (req, res) =>

    updateUser(req.user.id_usuario, req.body.estado_usuario) //uso el id_usuario del token

    .then((response) => { 

        res.status(200).send({mensaje: "Operación exitosa"});
    })
    .catch(e => {

        console.log(e);
        res.status(500).send({error: "Error del servidor"});
    })

module.exports = eliminarUsuario;