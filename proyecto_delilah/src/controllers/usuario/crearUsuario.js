const { newUser } = require("../../models/usuario");

function crearUsuario(req, res) {

    const arrayUsuarioNuevo = Object.values(req.body); //devuelve un array con las propiedades de un objeto

    newUser(arrayUsuarioNuevo)
    .then(response => {

        console.log(response);
        res.status(200).send({id: response[0]}); //devuelvo el id del nuevo usuario
    })
    .catch(e => {

        console.log(e);
        res.status(500).send({error: "Error del servidor"});
    })  
}

module.exports = crearUsuario;