function validarCamposUsuario(objeto) {

    const regexUsername = /(^[a-zA-Z0-9\-_]{4,36}$)/; //que tenga entre 4 y 36 caracteres de tipo alfanumérico y/o guión bajo o guión medio
    const regexEmail = /\w+@+\w+\.+[a-z]/; //debe tener el formato de email
    const regexTelefono = /([a-z]+)([A-Z]+)([!"·\$%&\/()=?¿\^\*¨Ç;:_'¡`´,\.\-|@#~€¬[\]{}]+)/g; //no debe tener ninguno de estos caracteres
    const regexPassword = /(?=^.{6,36}$)((?=.*\w)(?=.*[\d])(?=.*[\W]))^.*/; //que tenga entre 6 y 36 caracteres con al menos 1 letra (minúscula o mayúscula), 1 número y 1 caracter especial
    const regexTipoMail = /[@]{1}/g;

    const arrayUser = Object.values(objeto);

    if(arrayUser.length >= 2) {

        if(!regexPassword.test(objeto.password)) {

            return "La contraseña no es válida";
        }
    }

    if(arrayUser.length === 2) {

        if(regexTipoMail.test(objeto.username_o_email)) { //si tiene un @

            if(!regexEmail.test(objeto.username_o_email)) {

                return "El email no es válido";
            }

        }else {

            if(!regexUsername.test(objeto.username_o_email)) {

                return "El username no es válido";
            }
        }
    }

    if(arrayUser.length > 2) {

        if(!regexUsername.test(objeto.username)) {

            return "El username no es válido";

        }else if(!regexEmail.test(objeto.email)) {

            return "El email no es válido";

        }else if(regexTelefono.test(objeto.telefono)) {

            return "El teléfono no es válido";
        }
    }

    return "NEXT";
}


module.exports = validarCamposUsuario;