const { deletePlate } = require("../../models/plato")

const eliminarPlato = (req, res) => {

    deletePlate(req.params.IdPlato)
    .then(([response]) => { 
        
        response.affectedRows === 0? res.status(404).send({error: "Plato no encontrado"}) : res.status(200).send({mensaje: "Plato eliminado exitosamente"});
    })
    .catch(e => {

        console.log(e);
        e.name === 'SequelizeForeignKeyConstraintError'? res.status(500).send({error: "El plato que quiere eliminar fue usado en un pedido"}) : res.status(500).send({error: "Error del servidor"});
    })
}

module.exports = eliminarPlato;