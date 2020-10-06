const { validateUser } = require("../../models/usuario");
const validarCamposUsuario = require("../../models/validarCamposUsuario");

function validarUsuario (req, res, next) {

    const { username_o_email, password } = req.body;

    const userLogin = {
        username_o_email,
        password
    }

    if(username_o_email && password) {

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

            return res.status(422).send({error: "Hay uno o más campos inválidos"});
        }
        
    }else {

        return res.status(422).send({error: "Ingrese todos los datos solicitados"});
    }
}

module.exports = validarUsuario;