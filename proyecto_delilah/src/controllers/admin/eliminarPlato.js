const { deletePlate } = require("../../models/admin")

const eliminarPlato = (req, res) => {

    deletePlate(req.params.IdPlato)
    .then(([response]) => { 
        
        response.affectedRows === 0? res.status(404).send({error: "Plato no encontrado"}) : res.status(200).send({mensaje: "Plato eliminado exitosamente"});
    })
    .catch(e => {

        console.log(e);
        res.status(500).send({error: "Error del servidor"});
    })
}

module.exports = eliminarPlato;