function crearValues(array, id_pedido) {

    let arrayCantidadPlatos = array;

        let arrayValues = arrayCantidadPlatos.map( element => {
            element["id_pedido1"] = id_pedido; //le sumo el id del pedido
            return `(${element.id_plato1}, ${element.cantidad}, ${element.id_pedido1})`; //las ternas con los campos de cantidad_plato
        }); 

        const stringValues = arrayValues.join(); //lo paso a string

        return stringValues;
}

module.exports = crearValues;