/**.toString CAMBIAR VALOR DE TIPO NUMERO A STRING*/
const numero = 10;
console.log(numero, typeof numero);//VER TIPO DE DATO

const text = numero.toString();
console.log(text, typeof text);

/**
 * .toFixed()
 * PERMITE OBTENER UN NUMERO CON LA CANTIDAD DE DECIMALES ESPECIFICADOS*/
const valorPI = 3.1416;
console.log(valorPI.toFixed());//NO DEVUELVE DECIMAL
console.log(valorPI.toFixed(2));//SOLO TOMA 2 DECIMALES, SI SE SOBREPASA AGREGA 0

/**parceInt() TRANSFORMAR UN VALOR A UN ENTERO
 * NaN= Not A Number*/
// const numero1 = parseInt(prompt('Escribe un numero'));
// const numero2 = parseInt(prompt('Escribe otro numero'));
// console.log(numero1 + numero2);

/**parceInt() TRANSFORMAR UN VALOR A UN DECIMAL */
// const numeroA = parseFloat(prompt('Escribe un numero'));
// const numeroB = parseFloat(prompt('Escribe otro numero'));
// console.log(numeroA + numeroB);


/*Math.random() GENERA UN NUMERO AL AZAR ENTRE 0 Y 1 tambien entre otro rango de numeros*/
const num = Math.random();
console.log(num);
const numeroAleatorio = Math.random();
console.log(Math.floor(numeroAleatorio * 101)); //NUMEROS AL AZAR DE O A 100

/**Math.floor REDONDEAR HACIA ABAJO */
console.log(Math.floor('10.1'));


/**Math.ceil() REDONDEAR HACIA ARRIBA */
console.log(Math.ceil('10.1'));

/**Math.round() REDONDEAR HACIA EL ENTERO MAS CERCANO*/
console.log(Math.round('10.50'));

