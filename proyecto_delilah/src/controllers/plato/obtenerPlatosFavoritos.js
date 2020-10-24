const { favoritePlates } = require("../../models/plato");

const obtenerPlatosFavoritos = (req, res) => 

    favoritePlates(req.user.id_usuario)
    .then(([response]) =>  {

        response === undefined? res.status(404).send({mensaje: "No se encontraron platos favoritos"}) : res.status(200).send(response);
    })
    .catch(e => {

        console.log(e);
        res.status(500).send({mensaje: "Error del servidor"});
    })


module.exports = obtenerPlatosFavoritos;