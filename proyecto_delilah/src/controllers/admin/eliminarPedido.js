const sequelize = require("../../config/db");
const { deleteOrder, deletePlatesAmount } = require("../../models/admin");

const eliminarPedido = async (req, res) => {

    const transaction = await sequelize.transaction();

    try {

        const [ordenEliminada] = await deleteOrder(req.params.IdPedido, transaction);

        if(ordenEliminada.affectedRows === 0) throw "Pedido no encontrado";
        
        const cantidadPlatosEliminada = await deletePlatesAmount(req.params.IdPedido, transaction);

        await transaction.commit();

        res.status(200).send({mensaje: "Pedido eliminado exitósamente"});

    }catch(error){

        await transaction.rollback();
        error === "Pedido no encontrado"? res.status(422). send({error}) : res.status(500).send({error: "Error del servidor"});
    }
}

module.exports = eliminarPedido;