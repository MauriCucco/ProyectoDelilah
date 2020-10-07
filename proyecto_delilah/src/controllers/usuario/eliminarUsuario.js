const { deleteUser } = require("../../models/usuario");

const eliminarUsuario = (req, res) =>

    deleteUser(req.user.id_usuario) //uso el id_usuario del token por si alguien quiere eliminar un usuario por Postman

    .then((response) => { 

        res.status(200).send({mensaje: "El usuario ha sido eliminado exitosamente"});
    })
    .catch(e => {

        console.log(e);
        res.status(500).send({error: "Error del servidor"});
    })

module.exports = eliminarUsuario;