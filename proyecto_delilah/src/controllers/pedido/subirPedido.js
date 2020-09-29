const { newOrder } = require("../../models/pedido");
const { dishesNumber } = require("../../models/cantidad_platos");
const crearValues = require("../../models/crearValues")

function subirPedido(req, res) {

    const { id_usuario1, descripcion, tipo_pago, total } = req.body;

    newOrder([id_usuario1, tipo_pago, total]) //subo la info perteneciente a la tabla pedidos
    .then(response => {

        const values = crearValues(descripcion, response[0]);

        dishesNumber(values)
        .then(response => {
            console.log(response);
            res.status(200).send({mensaje: "Pedido subido con éxito"})
        })
        .catch(e => {
            console.log(e);
            res.status(500).send({mensaje: "Error del servidor"})
        });

    })
    .catch(e => {
        console.log(e);
        res.status(500).send({mensaje: "Error del servidor"})
    });
}

module.exports = subirPedido;