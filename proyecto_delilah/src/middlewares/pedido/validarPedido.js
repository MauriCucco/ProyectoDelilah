const validarCamposPedido = require("../../models/validarCamposPedido");

function validarPedido(req, res, next) {

    const { id_usuario1, descripcion, tipo_pago, total } = req.body;

    if(id_usuario1
       && descripcion
       && tipo_pago
       && total) {

        validarCamposPedido(nuevoPedido)? next() : res.status(422).send({error: "Hay uno o más campos inválidos"});

    }else {

        res.status(422).send({error: "El pedido está incompleto"});
    }
}

module.exports = validarPedido;