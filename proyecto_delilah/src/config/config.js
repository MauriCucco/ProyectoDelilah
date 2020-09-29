require("dotenv").config()

const jwtClave = process.env.TKS;
const puerto = process.env.PORT;

module.exports = {
    jwtClave,
    puerto
}