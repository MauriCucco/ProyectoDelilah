const validarCamposPlato = require("../../models/ValidarCamposPlato");

function validarPlato(req, res, next) {

    if(req.method === "POST") {

        const nuevoPlato = ({ nombre_plato, precio } = req.body);

        if(nombre_plato && precio) {

            const respuesta = validarCamposPlato(nuevoPlato);
            
            (respuesta === "NEXT")? next() : res.status(422).send({error: respuesta});
            
        }else {

            res.status(422).send({error: "Ingrese todos los campos solicitados"});
        }

    }else if(req.method === "PUT") {

        const platoActualizado = ({ nombre_plato, precio, estado_plato } = req.body);

        if(nombre_plato && precio && estado_plato) {

            const respuesta = validarCamposPlato(platoActualizado);
            
            (respuesta === "NEXT")? next() : res.status(422).send({error: respuesta});

        }else {

            res.status(422).send({error: "Ingrese todos los campos solicitados"})
        }
    }
}

module.exports = validarPlato;