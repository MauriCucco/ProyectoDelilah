const validarCamposPedido = require("../../models/validarCamposPedido");

function validarPedido(req, res, next) {

    const nuevoPedido = ({ id_usuario1, descripcion, tipo_pago, total } = req.body);

    if(nuevoPedido && Object.values(nuevoPedido).length === 4) {

        if(validarCamposPedido(nuevoPedido)) {

            return next();

        }else {

            return res.status(422).send({error: "Hay uno o más campos inválidos"});
        }

    }else {

        return res.status(422).send({error: "El pedido está incompleto"});
    }
    
}

module.exports = validarPedido;