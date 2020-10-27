const nodemailer = require("nodemailer");
const { service, mailUser, mailPass } = require("../config/config")

const sendConfirm = async ({ to, subject = "Gracias por registrarte", text, attachments = [] }) => { //desestructuro el objeto que me llega como parametro
    try {

        const transporter = nodemailer.createTransport({
            service,
            auth: {
                user: mailUser,
                pass: mailPass
            },
            tls: {
                rejectUnauthorized: false //le aviso a Gmail que no tengo un servicio de TLS activado
            }
        })

        const mail = {
            from: '"NO REPLY 👻" <noreply@delilahresto.com>', //con Gmail se reescribe al mail de mailUser
            to,
            subject,
            text,
            attachments
        }

        const sendMail = await transporter.sendMail(mail);

        return sendMail.messageId;
        
    } catch (error) {
        
        console.log(error);
    }
}

module.exports = { sendConfirm };