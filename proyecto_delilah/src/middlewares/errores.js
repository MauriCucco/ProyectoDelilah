
function notFound(req, res) {

    res.status(404).send({codigo: 404, mensaje: "La página solicitada no existe"})
}

function errorServidor (err, req, res, next) {

    if (!err) { //no hay error
        return next();    }

    console.log(JSON.stringify(err));

    res.status(500).send({codigo: 500, mensaje: "Se ha producido un error inesperado"});
}

module.exports = {
    notFound,
    errorServidor
}