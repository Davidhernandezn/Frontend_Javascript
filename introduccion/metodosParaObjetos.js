// OBJETO
const usuario = {
    nombre: 'David',
    edad: 25,
    amigos: ['Alex', 'Sofia', 'Alice'],

    saludo: ()=>{
        console.log('Hola');
    },
};

/**METODOS PERSONALIZADO */
usuario.saludo();

/** Object.keys()
 * NOS DEVUELVE UN ARREGLO  CON LAS LLAVES (KEYS) DEL OBJETO
*/
const resultados = Object.keys(usuario);
console.log(resultados);//DEVUELVE PROPIEDADES PERO NO LOS VALORES


/**Object.values()
 * NOS DEVUELVE UN ARREGLO CON LOS VALORES (VALUES) DEL OBJETO
 */
const datos = Object.values(usuario);
console.log(datos);

/**Object.entries()
 * NOS DEVUELVE UN ARREGLO CON LAS PAREJAS CLAVE Y VALOR DEL OBJETO
 * conocer cuantas propiedades tiene
 */
const data = Object.entries(usuario);
console.log(data);