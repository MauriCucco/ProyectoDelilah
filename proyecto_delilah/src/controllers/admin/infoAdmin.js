const { allInfo } = require("../../services/admin")

const infoAdmin = (req, res) => 

    allInfo()
    .then(response => {

        if(response.length === 0) return res.status(200).send({mensaje: "No hay pedidos por el momento"});

        res.status(200).send(response);
    })
    .catch(e => {
        console.log(e);
        res.status(500).send({mensaje: "Error del servidor"});
    })


module.exports = infoAdmin;