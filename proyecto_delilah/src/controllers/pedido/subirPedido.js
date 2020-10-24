const { newOrder } = require("../../models/pedido");
const { newDishesNumber } = require("../../models/cantidad_platos");
const { beginOrder, commitOrder, rollbackOrder} = require("../../services/transaction")

async function subirPedido(req, res) {

    try{

        const { id_usuario1, descripcion, tipo_pago, total } = req.pedido;

        const begin = await beginOrder(); //inicio la transacción

        const result = await newOrder([id_usuario1, tipo_pago, total]); //INSERT del pedido

        const id_pedido = result[0]; 

        descripcion.forEach( element => element["id_pedido1"] = id_pedido); //le sumo el id del pedido

        for(let i=0; i< descripcion.length; i++) { //con un forEach no funciona
        
            let insert = await newDishesNumber(Object.values(descripcion[i])); //INSERT en cantidad_platos

            console.log(insert); 
        };

        const commit = await commitOrder();

        res.status(200).send({mensaje: "Pedido subido con éxito", id_pedido});
        
    }catch (error) {

        console.log(error);

        const rollback = await rollbackOrder();
        
        res.status(500).send({error: "Error del servidor"});
    }
}

module.exports = subirPedido;