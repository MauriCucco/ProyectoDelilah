const { uploadPlate } = require("../../models/plato");

function subirPlato(req, res) {

    const { nombre_plato, precio } = req.body;

    uploadPlate([nombre_plato, precio])
    .then(response => {

        res.status(200).send({mensaje: "Plato subido con éxito", id_plato: response[0]});
    })
    .catch(e => {

        console.log(e);
        res.status(500).send({error: "Error del servidor"});
    })
}

module.exports = subirPlato;