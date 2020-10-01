const { newOrder, beginOrder, commitOrder, rollbackOrder } = require("../../models/pedido");
const { newDishesNumber } = require("../../models/cantidad_platos");

async function subirPedido(req, res) {

    try{

        const { id_usuario1, descripcion, tipo_pago, total } = req.body;

        const begin = await beginOrder(); //inicio la transacción

        const result = await newOrder([id_usuario1, tipo_pago, total]); //insert del pedido

        const id_pedido1 = result[0];

        descripcion.forEach( element => element["id_pedido1"] = id_pedido1); //le sumo el id del pedido

        for(let i=0; i< descripcion.length; i++) { //con un forEach no funciona
        
            let insert = await newDishesNumber(Object.values(descripcion[i]));

            console.log(insert); 
        };

        const commit = await commitOrder();

        res.status(200).send({mensaje: "Pedido subido con éxito"});
        
    }catch (error) {

        console.log(error);

        const rollback = await rollbackOrder();
        
        res.status(500).send({error: "Error del servidor"});
    }
}

module.exports = subirPedido;