const { updatePlate } = require("../../models/plato")

const actualizarPlato = (req, res) => {

    const { nombre_plato, precio, estado_plato } = req.body;

    updatePlate([nombre_plato, precio, estado_plato, req.params.IdPlato])
    .then(([response]) => { 
        
        response.affectedRows === 0? res.status(404).send({error: "Plato no encontrado"}) : res.status(200).send({mensaje: "Plato actualizado exitosamente"});
    })
    .catch(e => {

        console.log(e);
        res.status(500).send({error: "Error del servidor"});
    })
}

module.exports = actualizarPlato;