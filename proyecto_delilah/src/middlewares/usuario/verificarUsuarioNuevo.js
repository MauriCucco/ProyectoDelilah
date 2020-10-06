const { verifyUser } = require("../../models/usuario");
const validarCamposUsuario = require("../../models/validarCamposUsuario");

function verificarUsuarioNuevo(req, res, next) {

    const {username, nombre_completo, email, telefono, direccion, password} = req.body; 

    if(username
       && nombre_completo
       && email
       && telefono
       && direccion
       && password) { 

        if(validarCamposUsuario(newUser)) { // valido los valores de los campos del registro
        
            verifyUser(newUser.username, newUser.email) //chequeo que no haya un usuario con el mismo username e imail registrado
            .then(([response]) => {
                
                response === undefined? next() : res.status(422).send({error: "Usuario no disponible"});
            
            })
            .catch(e => {

                console.log(e);
                res.status(500).send({error: "Error del servidor"});
            })

        }else {

            res.status(422).send({error: "Hay uno o más campos inválidos"});
        }

    }else {

        res.status(422).send({error: "Ingrese todos los datos solicitados"});
    }

}

module.exports = verificarUsuarioNuevo;