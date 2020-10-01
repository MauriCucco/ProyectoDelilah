function validarCamposPedido(objeto) {

    const arrayPedido = Object.values(objeto);
    const index = arrayPedido.findIndex( elem => elem === "");

    if(index >= 0) { //que no vengan vacios

        return false;

    }else if(isNaN(objeto.id_usuario1) //que sean numeros
             || isNaN(objeto.total)) {
        
        return false;

    }else if(!Array.isArray(objeto.descripcion)){ //que sea un array
        
        return false;

    }else if(Array.isArray(objeto.descripcion)){

        const arrayPropiedades = objeto.descripcion.map(element => Object.keys(element));

        const found = arrayPropiedades.findIndex(element => element[0] !== "id_plato1" || element[1] !== "cantidad");

        if(found >= 0) { //significa que hay una propiedad que falta o que está mal escrita

            return false;

        }else {

            const arrayValues = objeto.descripcion.map(element => Object.values(element));

            const found2 = arrayValues.findIndex(element => isNaN(element[0]) || isNaN(element[1]));

            if(found2 >= 0) { //significa que algún valor de las propiedades es erróneo
     
                 return false;
            }
        }
    }
    
    if((objeto.tipo_pago === "efectivo")
        || (objeto.tipo_pago === "debito")
        || (objeto.tipo_pago === "credito")) {

        return true;
    }

    return false;
}

module.exports = validarCamposPedido;