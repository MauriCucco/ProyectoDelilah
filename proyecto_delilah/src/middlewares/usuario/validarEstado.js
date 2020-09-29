function validarEstado(req, res, next) {

    let estado = req.body.estado_usuario;

    if(estado && estado === "E" || estado && estado ==="H") {

        return next();

    }else {

        res.status(400).send({mensaje: "Ingrese un estado correcto"});
    }
}

module.exports = validarEstado;