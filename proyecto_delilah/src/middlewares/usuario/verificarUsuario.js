const { checkUser } = require("../../models/usuario");
const validarCampos = require("../../models/validarCampos");

function verificarUsuario(req, res, next) {

    const newUser = ({username, nombre_completo, email, telefono, direccion, password} = req.body); //desestructuré las propiedades del req.body y creé un objeto nuevo

    if(Object.keys(newUser).length === 6) { //hay 6 propiedades en newUser

        if(validarCampos(newUser)) { //los valores de los campos son válidos
        
            checkUser(newUser.username, newUser.email) //chequeo que no haya un usuario con el mismo username e imail registrado
            .then(([response]) => {
                
                if(response === undefined) {

                    return next();

                }else {

                    return res.status(400).send({error: "Usuario no disponible"});
                }
            })
            .catch(e => {

                console.log(e);
                res.status(500).send({error: "Error del servidor"});
            })

        }else {

            return res.status(400).send({error: "Hay uno o más campos inválidos"});
        }

    }else {

        return res.status(400).send({error: "Ingrese todos los datos solicitados"});
    }

}

module.exports = verificarUsuario;