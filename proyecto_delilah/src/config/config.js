require("dotenv").config()

const token = process.env.TKS;
const puerto = process.env.PORT;

module.exports = {
    token,
    puerto
}