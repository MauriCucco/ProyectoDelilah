const { verifyUser } = require("../../models/usuario");
const validarCamposUsuario = require("../../models/validarCamposUsuario");

function verificarUsuarioNuevo(req, res, next) {

    const newUser = ({username, nombre_completo, email, telefono, direccion, password} = req.body); //desestructuré las propiedades del req.body y creé un objeto nuevo

    if(newUser && Object.keys(newUser).length === 6) { //hay 6 propiedades en newUser

        if(validarCamposUsuario(newUser)) { //los valores de los campos son válidos
        
            verifyUser(newUser.username, newUser.email) //chequeo que no haya un usuario con el mismo username e imail registrado
            .then(([response]) => {
                
                if(response === undefined) {

                    return next();

                }else {

                    return res.status(422).send({error: "Usuario no disponible"});
                }
            })
            .catch(e => {

                console.log(e);
                res.status(500).send({error: "Error del servidor"});
            })

        }else {

            return res.status(422).send({error: "Hay uno o más campos inválidos"});
        }

    }else {

        return res.status(422).send({error: "Ingrese todos los datos solicitados"});
    }

}

module.exports = verificarUsuarioNuevo;