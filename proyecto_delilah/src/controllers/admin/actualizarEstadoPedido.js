const { updateOrder } = require("../../models/admin");

function actualizarEstadoPedido(req, res) {

    updateOrder([req.body.estado_pedido, req.params.IdPedido])
    .then((response) => { //desestructuro el response de la bd para que no devuelva un array

        console.log(response)
        
        if(response.affectedRows === 0) { //si no afecta a ningún registro

            return res.status(404).send({error: "Pedido no encontrado"})
        }

        res.status(200).send({mensaje: "Operación exitosa"});
    })
    .catch(e => {

        console.log(e);
        res.status(500).send({error: "Error del servidor"});
    })
}

module.exports = actualizarEstadoPedido;