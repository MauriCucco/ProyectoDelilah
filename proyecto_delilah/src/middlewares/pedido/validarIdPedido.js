function validarIdPedido(req, res, next) {

    const { id_pedido } = req.body;

    (id_pedido && !isNaN(id_pedido))? next() : res.status(422).send({error: "El ID del pedido es incorrecto"});
    
}

module.exports = validarIdPedido;