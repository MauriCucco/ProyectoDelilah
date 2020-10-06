const { newUser } = require("../../models/usuario");

function crearUsuario(req, res) {

    const arrayUsuarioNuevo = Object.values(req.body); //devuelve un array con las valores de un objeto

    newUser(arrayUsuarioNuevo)
    .then(response => {

        res.status(200).send({mensaje: "Usuario registrado con éxito"}); 
    })
    .catch(e => {

        console.log(e);
        res.status(500).send({error: "Error del servidor"});
    })  
}

module.exports = crearUsuario;