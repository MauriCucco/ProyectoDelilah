function validarCamposUsuario(objeto) {

    const regexUsername = /(?=^.{4,36}$)([a-zA-Z0-9\-_]+)/;
    const regexEmail = /\w+@+\w+\.+[a-z]/; //debe tener el formato de email
    const regexTelefono = /([a-z]?)([A-Z]?)([!"·\$%&\/()=?¿\^\*¨Ç;:_'¡`´,\.\-|@#~€¬[\]{}]?)/g; //no debe tener ninguno de estos caracteres
    const regexPassword = /(?=^.{6,36}$)((?=.*\w)(?=.*[\d])(?=.*[\W]))^.*/; //que tenga entre 6 y 36 caracteres con al menos 1 letra (minúscula o mayúscula), 1 número y 1 caracter especial
    const esTipoMail = /[@]{1}/g;

    const arrayUser = Object.values(objeto);
    const index = arrayUser.findIndex( elem => elem === "");

    if(arrayUser.length >= 2) {

        if(index >= 0) { //si existe alguna propiedad con el valor ""

            return false;

        }else if(!regexPassword.test(objeto.password)) {

            return false;
        }
    }

    if(arrayUser.length === 2) {

        if(esTipoMail.test(objeto.username_o_email)) { //si tiene un @

            if(!regexEmail.test(objeto.username_o_email)) {

                return false;
            }

        }else {

            if(!regexUsername.test(objeto.username_o_email)) {

                return false;
            }
        }
    }

    if(arrayUser.length > 2) {

        if(!regexUsername.test(objeto.username)) {

            return false;

        }else if(!regexEmail.test(objeto.email)) {

            return false;

        }else if(regexTelefono.test(objeto.telefono)) {

            return false;
        }
    }

    return true;
}


module.exports = validarCamposUsuario;