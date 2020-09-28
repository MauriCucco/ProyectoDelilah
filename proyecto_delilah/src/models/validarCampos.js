function validarCampos(objeto) {

    let regexEmail = /\w+@+\w+\.+[a-z]/; 
    let regexPass = /(?=^.{6,36}$)((?=.*\w)(?=.*[\d])(?=.*[\W]))^.*/; //que tenga entre 6 y 36 caracteres con al menos 1 letra (minúscula o mayúscula), 1 número y 1 caracter especial
    let regexTel = /([a-zA-Z])?([!"·\$%&\/()=?¿\^\*¨Ç;:_'¡`´,\.\-|@#~€¬[\]{}]?)/; //no debe tener ninguno de estos caracteres

    const arrayUser = Object.values(objeto);
    const index = arrayUser.findIndex( elem => elem === "");

    if(index >= 0) { //si existe alguna propiedad con el valor ""

        return false;

    }else if(!regexEmail.test(objeto.email)) {

        return false;

    }else if(!regexPass.test(objeto.password)) {

        return false;

    }else if(regexTel.test(objeto.telefono)) {

        return false;
    }

    return true;
}

module.exports = validarCampos;