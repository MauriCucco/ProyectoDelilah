function validarCamposPedido(objeto) {

    const arrayPedido = Object.values(objeto);
    const index = arrayPedido.findIndex( elem => elem === "");

    if(index >= 0) { //que no vengan vacios

        return false;

    }else if(isNaN(objeto.id_pedido1) //que sean numeros
             || isNaN(objeto.descripcion.id_plato1)
             || isNaN(objeto.descripcion.cantidad)
             || isNaN(objeto.total)) {

        return false;

    }else if(!Array.isArray(objeto.descripcion)){ //que sea un array
        
        return false;

    }else if(objeto.tipo_pago !== "efectivo"
             || objeto.tipo_pago !== "debito"
             || objeto.tipo_pago !== "credito") {

        return false;
    } 

    return true;
}

module.exports = validarCamposPedido;