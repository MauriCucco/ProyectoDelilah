const { stateOrder } = require("../../models/pedido");

const obtenerEstadoPedido = (req, res) =>

    stateOrder(req.body.id_pedido)
    .then(([response]) =>  {

        response === undefined? res.status(404).send({mensaje: "Pedido no encontrado"}) : res.status(200).send(response);
    })
    .catch(e => {
        console.log(e);
        res.status(500).send({mensaje: "Error del servidor"});
    })


module.exports = obtenerEstadoPedido;