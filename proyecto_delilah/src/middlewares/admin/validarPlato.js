const validarCamposPlato = require("../../models/ValidarCamposPlato");

function validarPlato(req, res, next) {

    if(req.method === "POST") {

        const { nombre_plato, precio } = req.body;

        const objPlato = { 
            nombre_plato, 
            precio 
        }

        if(nombre_plato && precio) {

            if(validarCamposPlato(objPlato)) {

                next();

            }else {

                res.status(422).send({error: "Hay uno o más campos inválidos"})
            }

        }else {

            res.status(422).send({error: "Ingrese todos los datos solicitados"})
        }

    }else if(req.method === "PUT") {

        const { nombre_plato, precio, estado_plato } = req.body;

        const objPlatoActualizado = {
            nombre_plato,
            precio,
            estado_plato
        }

        if(nombre_plato && precio && estado_plato) {

            if(validarCamposPlato(objPlatoActualizado)) {

                next();

            }else {

                res.status(422).send({error: "Hay uno o más campos inválidos"})
            }

        }else {

            res.status(422).send({error: "Ingrese todos los datos solicitados"})
        }
    }
}

module.exports = validarPlato;