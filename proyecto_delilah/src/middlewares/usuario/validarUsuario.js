const { validateUser } = require("../../models/usuario");
const validarCamposUsuario = require("../../models/validarCamposUsuario");

function validarUsuario (req, res, next) {

    const usuarioLogin = ({ username_o_email, password } = req.body);

    if(username_o_email && password) {

        const respuesta = validarCamposUsuario(usuarioLogin);

        if(respuesta === "NEXT") {

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

            res.status(422).send({error: respuesta});
        }
        
    }else {

        res.status(422).send({error: "Ingrese todos los campos solicitados"});
    }
}

module.exports = validarUsuario;