 //LOS ARREGLOS SON OBJETOS (TIENEN PROPIEDADES Y  METODOS)
const colores = ['Rojo', 'Verde','Azul'];
console.log(colores.length);/*CANTIDAD O TAMAÑO DE ARRAY */

/** .toString() 
 * PERMITE TRASFORMAR UN ARREGLO A UNA CADENA DE TEXTO,  EJEMPLO PARA PODER MOSTRARLO EN EL NAVEGADOR*/
//document.body.innerHTML = colores.toString(); //DOM ACCEDE AL DOCUMENTO. ENTRA AL BODY Y AGREGA EL VALOR COLORES

/**.join 
 * TRANSFORMA UN ARREGLO A UNA CADENA DE TEXTO Y SEPARAR CADA ELEMENTO POR LA LETRA DESEADA
 */
console.log(colores.join('-'))


/**
 * .sort()
 * ORDENA UN ARREGLO DE CADENA DE TEXTO DE MANERA ALFANUMERICA
 */
const letras = ['c','b','d','a'];
console.log(letras.sort());

const numeros = [3,5,7,3,1];
console.log(numeros.sort());

/**
 * .reverse()
 * ORDENA UN ARREGLO DE FORMA DESENDIENTE
 */
console.log(letras.reverse());
console.log(numeros.reverse());


/** .concat()
 *  JUNTAR UNIR DOS ARREGLOS
 */
const arreglo1 = [1,2,3];
const arreglo2 = ['A','B','C'];

const arreglo3 = arreglo1.concat(arreglo2);
console.log(arreglo3);


/**
 * .push()
 * AGREGAR UN ELEMENTO AL FINAL DE UN ARREGLO
 */
colores.push('amarillo');
console.log(colores);

/**.pop
 * ELIMINA EL ULTIMO ELEMENTO
 */
colores.pop();
colores.pop();
console.log(colores);

/* .shift()
ELIMINAR EL PRIMER ELEMENTO, RECORRE LOS ELEMENTOS
**/
const dias = ['LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO', 'DOMINGO'];
console.log(dias);
const diaEliminando = dias.shift();
console.log('Eliminaste: ',diaEliminando);
console.log(dias[0]);

/** .unshift()
 * AGREGAR UN ELEMENTO AL INICIO DEL ARRAY Y EMPUJA LOS ELEMENTOS
 */
dias.unshift('DAvid');
console.log(dias);

/**.splice()
 * AGREGAR ELEMENTOS A UN ARRAY DONDE LE ESPECIFIQUEMOS
 * PARAMETRO 1 = POSICION DONDE QUEREMOS COMENZAR A INSERTAR ELEMENTOS
 * 
 * PARAMETRO 2 = SI QUEREMOS ELIMINAR ELEMENTOS DEL ARRAY  DESDE LA POSICION INDICADA
 * 
 * PARAMETRO 3 = AGREGAR LOS ELEMENTOS QUE QUEREMOS INSERTAR
 */
const amigos = ['pedro','juan', 'johan'];
console.log(amigos);
amigos.splice(1,2,'Sara','Mariano');
console.log(amigos);
amigos.splice(1,0,'Sandra','Mariano');//NO ELIMINAR ELEMENTOS
console.log(amigos);
amigos.splice(0,0,'XAVIER','GUST');//AGREGAR ELEMENTOS AL INICIO
console.log(amigos);

/**.slice 
 * COPEAR PÁRTE DE UN ARREGLO A OTRO
 * PARAMETRO 1 - POSICION DESDE DONDE QUEREMOS COPIAR
 * PARAMETRO 2 - HASTA ANTES DE QUE ELEMENTO COPIAR
*/

const frutas =['Fresa','Melon','Naranja','Durazno'];
console.log(frutas);
const frutasFavoritas = frutas.slice(1, 3);
console.log(frutasFavoritas);
