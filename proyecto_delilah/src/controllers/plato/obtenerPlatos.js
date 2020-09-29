const { getAllPlates } = require("../../models/plato");

function obtenerPlatos(req, res) {

    getAllPlates()
    .then(response => res.status(200).send(response))
    .catch(e => {
        console.log(e);
        res.status(500).send({mensaje: "Error del servidor"});
    })
}

module.exports = obtenerPlatos;