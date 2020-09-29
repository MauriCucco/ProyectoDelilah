const { getAllPlatos } = require("../../models/plato");

function obtenerPlatos(req, res) {

    getAllPlatos()
    .then(response => res.status(200).send(response))
    .catch(e => {
        console.log(e);
        res.status(500).send({mensaje: "Error del servidor"});
    })
}

module.exports = obtenerPlatos;