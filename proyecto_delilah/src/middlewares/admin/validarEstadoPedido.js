function validarEstadoPedido(req, res, next) {

    const { estado_pedido } = req.body;

    if(estado_pedido) {

        if(estado_pedido === "nuevo"
           || estado_pedido === "en preparacion"
           || estado_pedido === "en camino"
           || estado_pedido === "entregado"
           || estado_pedido === "cancelado") {

            next();

        }else {

            res.status(422).send({error: "El campo es inválido"})
        }

    }else {

        res.status(422).send({error: "Ingrese el campo correctamente"});
    }
}

module.exports = validarEstadoPedido;