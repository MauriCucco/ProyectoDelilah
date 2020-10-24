const { updateOrder } = require("../../models/pedido");

const actualizarEstadoPedido = (req, res) => 

    updateOrder([req.body.estado_pedido, req.params.IdPedido])
    .then(([response]) => { 
        
        response.affectedRows === 0? res.status(404).send({error: "Pedido no encontrado"}) : res.status(200).send({mensaje: "Estado del pedido actualizado exitosamente"});
    })
    .catch(e => {

        console.log(e);
        res.status(500).send({error: "Error del servidor"});
    })


module.exports = actualizarEstadoPedido;