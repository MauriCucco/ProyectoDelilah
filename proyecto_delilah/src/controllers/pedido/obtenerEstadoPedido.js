const { stateOrder } = require("../../models/pedido");

function obtenerEstadoPedido(req, res) {

    stateOrder(req.params.IdPedido)
    .then(([response]) =>  {

        if(response === undefined) {

            return res.status(404).send({mensaje: "Pedido no encontrado"});
        }

        res.status(200).send(response);
    })
    .catch(e => {
        console.log(e);
        res.status(500).send({mensaje: "Error del servidor"});
    })
}

module.exports = obtenerEstadoPedido;