const { verifyUser } = require("../../models/usuario");
const validarCamposUsuario = require("../../models/validarCamposUsuario");

function verificarUsuarioNuevo(req, res, next) {

    const usuarioNuevo = ({username, nombre_completo, email, telefono, direccion, password} = req.body); 

    if(username
       && nombre_completo
       && email
       && telefono
       && direccion
       && password) { 

        console.log(usuarioNuevo);

        const respuesta = validarCamposUsuario(usuarioNuevo); //chequeo los valores ingresados

        if(respuesta === "NEXT"){

            verifyUser(username, email) //chequeo que no haya un usuario con el mismo username y email registrado
            .then(([response]) => {
                
                response === undefined? next() : res.status(422).send({error: "Usuario no disponible"});
            
            })
            .catch(e => {

                console.log(e);
                res.status(500).send({error: "Error del servidor"});
            })

        }else {

            res.status(422).send({error: respuesta});
        }

    }else {

        res.status(422).send({error: "Ingrese todos los campos solicitados"});
    }

}

module.exports = verificarUsuarioNuevo;