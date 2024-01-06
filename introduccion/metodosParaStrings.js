/**.length()
 * VER CUANTOS CARACTERES TIENE JS */

const texto = 'Hola soy un texto';
console.log(texto.length);


/** index.of() .lastIndexOf()
 * Devuelve el primer / ultimo caracter O LA POSICION DEL CARACTER
 * -1 QUIERE DECIR QUE NO EXISTE
 * PODEMOS USARLOS AL CORTAR TEXTOS*/
 console.log(texto.indexOf('H'));
 console.log(texto.lastIndexOf('o'));

 /**.slice()
  * 1ER PARAMETRO - INDEX DONDE QUEREMOS CORTAR
  * 2DO PARAMETRP - INDEX HASTA DONDE QUEREMOS CORTAR (OPCIONAL)
  */
 console.log(texto.slice('12'));
 const letra = texto.indexOf('t');
 const letraFinal = texto.indexOf('o');
 console.log(texto.slice(letra, letraFinal));//DE DONDE A DONDE CORTAR
 console.log(texto.slice(12, 17));//DE DONDE A DONDE CORTAR
 console.log(texto.slice(-4, -2));//DE DONDE A DONDE CORTAR PODEMOS CONTAR DE IZQUIERDA A DERECHA

 /**
  * .replace() - DEVUELVE UNA CADENA DE TEXTO EN DONDE REMPLAZA UN VALOR POR OTRO AÑO
  *   1ER PARAMETRO - EL TEXTO QUE QUEREMOS REMPLAZAR
  *   2DO PARAMETRO - EL TEXTO QUE QUEREMOS PONER*/

 console.log(texto);
 console.log(texto.replace('texto', 'David'));

 /**.split()
  * -COMBIERTE UNA CADENA DE TEXTO EN UN ARREGLO.
  * DEBEMOS ESPECIFICAR DONDE CORTAR CADA ELEMENTO
  * 1 ER PARAMETRO - EL CARACTER QUE FUNCIONARA COMO SEPARADOR**/

 console.log(texto);
 console.log(texto.split(' '));//RECOMENDABLE
 console.log(texto.split('-'));//RECOMENDABLE EN NUMEROS
 console.log(texto.split('o'));

/**.toUpperCase() 
 * .toLowerCase()
 * DEVULELVE LA CADENA DE TEXTO A MAYUSCULA O MINUSCULA
*/
console.log(texto.toLowerCase());
console.log(texto.toUpperCase());