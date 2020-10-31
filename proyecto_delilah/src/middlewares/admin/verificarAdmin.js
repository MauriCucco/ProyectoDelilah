
const verificarAdmin = (req, res, next) => 

    (req.user.administrador === "T")? next() : res.status(401).send({error: "No posee autorización de administrador"});
    
module.exports = verificarAdmin;