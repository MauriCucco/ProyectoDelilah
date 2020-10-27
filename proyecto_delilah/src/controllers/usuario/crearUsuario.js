const sequelize = require("../../config/db");
const { newUser } = require("../../models/usuario");
const { v4: uuid } = require("uuid");
const { crearToken } = require("../../models/crearToken");
const { sendConfirm } = require("../../services/mail");
const { urlConfirm } = require("../../config/config");

const crearUsuario = async (req, res) => {

    const transaction = await sequelize.transaction();

    try {
        const arrayUsuarioNuevo = Object.values(req.body); //devuelve un array con las valores de un objeto
    
        const uuid_correo = uuid();
    
        const token_correo = crearToken({uuid_correo});
    
        arrayUsuarioNuevo.push(uuid_correo, token_correo);
    
        const [idUser] = await newUser(arrayUsuarioNuevo, transaction);

        if(idUser === undefined) throw "No se pudo insertar el usuario"

        const { email } = req.body;

        const text = `Para confirmar su cuenta debe ingresar al siguiente link: ${urlConfirm}?token=${token_correo}&uuid=${uuid_correo}`

        const messageId = await sendConfirm({to: email, text});

        if(messageId === undefined) throw "Hubo un error al enviar el email de confirmación"

        await transaction.commit();
    
        res.status(200).send({mensaje: "Se envió un email para confirmar su cuenta"});
        
    } catch (error) {

        console.log(error);

        await transaction.rollback();

        res.status(500).send({error});
    }
}

module.exports = crearUsuario;