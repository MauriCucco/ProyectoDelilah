function validarIdPedido(req, res, next) {

    const { id_pedido } = req.body;

    (id_pedido && Number.isInteger(id_pedido))? next() : res.status(422).send({error: "El ID del pedido es inválido"});
    
}

module.exports = validarIdPedido;