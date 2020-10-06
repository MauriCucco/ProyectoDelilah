function verificarAdmin(req, res, next) {

    console.log(req.user);
    
    if(req.user.administrador === "T") {

        next();

    }else {

        res.status(401).send({error: "No posee autorización de administrador"});
    }
}

module.exports = verificarAdmin;