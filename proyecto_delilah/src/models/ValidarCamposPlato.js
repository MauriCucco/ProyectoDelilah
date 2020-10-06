function validarCamposPlato(objeto) {

    const regexNombre = /(?=^.{4,36}$)(^[a-zA-Z]+)([\s]*)([a-zA-Z]*$)/g; //que tenga entre 4 y 36 caracteres sin números o caracteres especiales
    const regexPrecio = /(?=^.{2,8}$)(^[0-9]+)([\.]*)([0-9]{0,2}$)/g; //que tenga entre 2 y 8 caracteres numéricos con un posible "." y 2 decimales como máximo

    const arrayPlato = Object.values(objeto);

    if(!regexNombre.test(objeto.nombre_plato)) {

        return false;

    }else if(!regexPrecio.test(objeto.precio)) {

        return false;

    }else if(arrayPlato.length === 3) {

        if(objeto.estado_plato === "H"
           || objeto.estado_plato === "E") {

            return true;

        }else {

            return false;
        }
    }

    return true;
    
};

module.exports = validarCamposPlato;