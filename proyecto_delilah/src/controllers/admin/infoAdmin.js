const { allInfo } = require("../../models/admin")

function infoAdmin(req, res) {

    allInfo()
    .then(response => {
        res.status(200).send(response);
    })
    .catch(e => {
        console.log(e);
        res.status(500).send({mensaje: "Error del servidor"});
    })
}

module.exports = infoAdmin;