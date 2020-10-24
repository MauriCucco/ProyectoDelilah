
const validarEstadoPedido = (req, res, next) => {

    const { estado_pedido } = req.body;

    if(estado_pedido) {

        if(estado_pedido === "nuevo"
           || estado_pedido === "en preparacion"
           || estado_pedido === "en camino"
           || estado_pedido === "entregado"
           || estado_pedido === "cancelado") {

            next();

        }else {

            res.status(422).send({error: "El estado del pedido es inválido"})
        }

    }else {

        res.status(422).send({error: "Ingrese el campo requerido correctamente"});
    }
}

module.exports = validarEstadoPedido;