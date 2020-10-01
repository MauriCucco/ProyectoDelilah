const { allInfo } = require("../../models/admin")

function infoAdmin(req, res) {

    allInfo()
    .then(response => {

        /*const arrayModificado = response.forEach(element => {


        });*/

        res.status(200).send(response);
    })
    .catch(e => {
        console.log(e);
        res.status(500).send({mensaje: "Error del servidor"});
    })
}

module.exports = infoAdmin;