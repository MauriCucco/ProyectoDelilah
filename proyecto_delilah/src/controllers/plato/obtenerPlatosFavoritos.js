const { favoritePlates } = require("../../models/plato");

function obtenerPlatosFavoritos(req, res) {

    favoritePlates(req.params.IdUsuario)
    .then((response) =>  {

        console.log(response);

        if(response === undefined) {

            return res.status(404).send({mensaje: "Platos favoritos no encontrados"});
        }

        res.status(200).send(response);
    })
    .catch(e => {

        console.log(e);
        res.status(500).send({mensaje: "Error del servidor"});
    })
}

module.exports = obtenerPlatosFavoritos;