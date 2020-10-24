const validarCamposPedido = require("../../models/validarCamposPedido");

const validarPedido = (req, res, next) => {

    const nuevoPedido = ({ descripcion, tipo_pago, total } = req.body);

    if(descripcion
       && tipo_pago
       && total) {

        nuevoPedido.id_usuario1 = req.user.id_usuario; //agrego el id del usuario desde el token para que otra persona no pueda poner un id erróneo desde Postman

        console.log(nuevoPedido);

        const respuesta = validarCamposPedido(nuevoPedido);

        if(respuesta === "NEXT") {

            req.pedido = nuevoPedido;
            next()

        }else {
            res.status(422).send({error: respuesta});
        }

    }else {

        res.status(422).send({error: "El pedido está incompleto"});
    }
}

module.exports = validarPedido;