function validarEstado(req, res, next) {

    const { estado_usuario } = req.body;

    if(estado_usuario && estado_usuario === "E") {

        next();

    }else {

        res.status(422).send({mensaje: "Ingrese un estado correcto"});
    }
}

module.exports = validarEstado;