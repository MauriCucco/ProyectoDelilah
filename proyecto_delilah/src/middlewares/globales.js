const expressJwt = require("express-jwt");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require('helmet');
const rateLimit = require("express-rate-limit");
const config = require("../config/config.js"); //importo la key


let limiter = rateLimit({
    windowMs: 60 * 60 * 1000,  //60 minutos
    max: 10, //10 peticiones
    message: "Se superó el límite de 10 peticiones por hora."
});

module.exports = function(app) {

    app.use(cors());

    app.use(bodyParser.json());

    app.use(helmet());

    //app.use(limiter);

    //app.use(expressJwt({ secret: config.token, algorithms: ["HS256"]}).unless({path: ['/usuario/login', "/usuario/registro"]}));
}