const { getAllPlates } = require("../../models/plato");

const obtenerPlatos = (req, res) =>

    getAllPlates()
    .then(response => res.status(200).send({platos: response}))
    .catch(e => {

        console.log(e);
        res.status(500).send({mensaje: "Error del servidor"});
    })


module.exports = obtenerPlatos;