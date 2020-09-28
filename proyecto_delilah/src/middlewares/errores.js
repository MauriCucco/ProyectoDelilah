
function notFound(req, res) {

    res.status(404).send({mensaje: "La página solicitada no existe"})
}

function errorServidor (err, req, res, next) {

    if (!err) { //no hay error
        return next();    
    }

    console.log(err);

    res.status(500).send({mensaje: "Se ha producido un error inesperado"});
}

module.exports = {
    notFound,
    errorServidor
}