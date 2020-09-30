const { getInfoUser } = require("../../models/usuario");

const obtenerInfoUsuario = (req, res) => {

    getInfoUser(req.params.IdUsuario)
    .then(([response]) => { //desestructuro el response de la bd para que no devuelva un array

        console.log(response)
        if(response === undefined) {

            return res.status(404).send({error: "Usuario no encontrado"})
        }
        res.status(200).json(response);
    })
    .catch(e => {

        console.log(e);
        res.status(500).send({error: "Error del servidor"});
    })
}
module.exports = obtenerInfoUsuario;



