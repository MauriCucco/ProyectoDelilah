const { validateUser } = require("../../models/usuario");
const validarCamposUsuario = require("../../models/validarCamposUsuario");

function validarUsuario (req, res, next) {

    const userLogin = ({username_o_email, password} = req.body);

    if(userLogin && Object.keys(userLogin).length === 2) {

        if(validarCamposUsuario(userLogin)) {

            validateUser(username_o_email, password)

            .then(([response]) => {
            
                console.log(response);

                if(response === undefined) {

                    return res.status(404).send({error: "Usuario no encontrado"});

                }else {

                    req.body = response;

                    return next();
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

module.exports = validarUsuario;