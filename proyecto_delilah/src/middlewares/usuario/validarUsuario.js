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

                if(response === undefined) {

                    res.status(401).send({error: "Usuario no encontrado"});

                }else {

                    req.infoUsuario = response; //guardo la informacion que voy a necesitar después

                    next();
                }
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

module.exports = validarUsuario;