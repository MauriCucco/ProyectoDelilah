
const verificarAdmin = (req, res, next) => {
    
    if(req.user.administrador === "T") {

        next();

    }else {

        res.status(401).send({error: "No posee autorización de administrador"});
    }
}

module.exports = verificarAdmin;