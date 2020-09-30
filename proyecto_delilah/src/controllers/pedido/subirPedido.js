const { newOrder, deleteOrder } = require("../../models/pedido");
const { newDishesNumber } = require("../../models/cantidad_platos");
/*const { dishesNumber } = require("../../models/cantidad_platos");
const crearValues = require("../../models/crearValues");*/

async function subirPedido(req, res) {

    try{

        const { id_usuario1, descripcion, tipo_pago, total } = req.body;

        const result = await newOrder([id_usuario1, tipo_pago, total]); //insert del pedido

        const id_pedido1 = result[0];

        descripcion.forEach( element => element["id_pedido1"] = id_pedido1); //le sumo el id del pedido

        for(let i=0; i< descripcion.length; i++) {
        
            let insert = await newDishesNumber(Object.values(descripcion[i]));

            console.log(insert); 
        };

        res.status(200).send({mensaje: "Pedido subido con éxito"});
        
    }catch (error) {

        console.log(error);
        
        res.status(500).send({error: "Error del servidor"});
    }

    /*newOrder([id_usuario1, tipo_pago, total]) //subo la info perteneciente a la tabla pedidos
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
    });*/
}

module.exports = subirPedido;