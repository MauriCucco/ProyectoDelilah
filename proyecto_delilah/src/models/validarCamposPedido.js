function validarCamposPedido(objeto) {

    const arrayPedido = Object.values(objeto);

    if(typeof(objeto.total) !== "number"){
    
        return "El campo total es inválido"
    
    }else if(!Array.isArray(objeto.descripcion)){ //si NO es un array
        
        return "El campo descripción debe ser un array";

    }else if(Array.isArray(objeto.descripcion)){ //si es un array

        const arrayPropiedades = objeto.descripcion.map(element => Object.keys(element));

        const found = arrayPropiedades.findIndex(element => element[0] !== "id_plato1" || element[1] !== "cantidad");

        if(found >= 0) { //significa que hay una propiedad que falta o que está mal escrita

            return "El campo descripción está incompleto";

        }else {

            const arrayValues = objeto.descripcion.map(element => Object.values(element));

            const found2 = arrayValues.findIndex(element => isNaN(element[0]) || isNaN(element[1]));

            if(found2 >= 0) { //significa que algún valor de las propiedades es erróneo
     
                 return "Los valores ingresados en descripción deben ser numéricos";
            }
        }
    }
    
    if((objeto.tipo_pago === "efectivo")
        || (objeto.tipo_pago === "debito")
        || (objeto.tipo_pago === "credito")) {

        return "NEXT";

    }else {

        return "El tipo de pago es inválido";
    }
}

module.exports = validarCamposPedido;