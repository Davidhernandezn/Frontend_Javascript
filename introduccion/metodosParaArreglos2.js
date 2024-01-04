/** .indexOf() 
 * OBTENER EL PRIMER INDEX DE UN ELEMENTO Y SI NO HAY RETORNA -1
 * index es la posicion de un elemento
*/
const nombres= ['dani','jHON','FER','rAFA','FER'];
console.log(nombres);
//SI NO SE CONCOCE EL INDEX PERO SI EL VALOR  LO OBTENEMOS ASI (SI SE REPITE SOLO TRAE EL PRIMERO)
console.log(nombres.indexOf('FER'));

/**
 * .lastIndexOf()
 * OBTIENE EL INDEX DEL ULTIMO ELEMENTO si se repide ocurre lo mismo
*/
console.log(nombres.lastIndexOf('FER'));

/*forEach()
PARAMETRO = NECESITA UNA FUNCION
PERMITE EJECUTAR UN A FUNCION POR CADA ELEMENTO
**/
nombres.forEach(() =>{
    console.log(`Hola`)}
);

//RECORRER ARREGLO
nombres.forEach((nombreReocorrido) =>{
    console.log(`Hola ${nombreReocorrido}`)
});

//PARA USAR EL INDEX
nombres.forEach((nombreReocorrido, index) =>{
    console.log(`${index} Hola ${nombreReocorrido}`)
});

/**
 * .find
 * IGUAL QUE FOREACH PERMITE RECORRER ARRAYS SOLO QUE DEVUELVE EL PRIMER ELEMENTO QUE RETORNEMOS
 */

console.log("____________________")
const resultado = nombres.find((nombre) =>{
    //console.log(nombre[0]);//LO TOMA COMO ARREGLO A CADA LETRA N O M B R E
    
    //POR CADA NOMBRE VA AVALIDAR SI EMPIEZA CON LA LETRA F
    if(nombre[0] === 'F'){//SI NO SE CUMPLE DA UNDEFINED
    console.log(nombre);
    return nombre;//SI SE CUMPLE NOS DA EL NOMBRE
    }
});


console.log("____________________")

/** .map() mantiene tamaño AUN QUE TENGA QUE REGRESARLOS COMO INDEFINIDOS
 * PERMITE EJECUTAR UNA FUNCION POR CADA ELEMENTO Y CREAR UN NUEVO ARREGLO
 * EN BASE A LOS RESULTADOS DE ESA FUNCION
 */
console.log(nombres)
const nombresMayusculas = nombres.map((nombre) =>{
    return nombre.toUpperCase();//TRANSFORMAR A MAYUSCULAS
});

console.log(nombresMayusculas);
console.log("____________________")


/**.filter() 
 * PERMITE EJECUTAR UNA FUNCION POR CADA ELEMENTO
 * Y LUEGO CREAR UN ARRAY EN BASE A LOS RESULTADOS DE ESA FUNCION
 * DEVUELVE LOS RESULTADOS QUE CUMPLEN CON LA FUNCION VAREA EL TAMAÑO DEL ARRAY
*/
//QUE INICIE POR 4 LETRAS
const nombre4Letras = nombres.filter((nombre)=>{
    if(nombre.length === 4){//LOS QUE TENGAN 4 LETRAS LOS GUARDA Y DEVUELVE EN RETURN 
            return nombre;//(DEVUELVE SOLO LOS QUE CUMPLAN
    }
});
console.log(nombre4Letras);
console.log("____________________")


/** .includes()
 * PERMITE SABER SI EL ARREGLO CONTIENE UN ELEMENTO  ESPECIFICADO (BOOLEANO)
 */
console.log(nombres.includes('FER'));

/**.every
 * PERMITE EJECUTAR UNA CONDICIONAR POR CADA ELEMENTO Y DEVUELVE TRUE, SI TODOS LOS
 * ELEMENTOS CUMPLEN LA CONDICION
 * PODEMOS USARLO PARA VALDIAR FORMULARIOS
 */
 const nombresEvery= ['dani','jHON','FER','rAFA','FER',22];
 const nombresValidos = nombresEvery.every((nombre)=>{//VALIDAMOS SI TODOS SON STRING
    if(typeof nombre === 'string'){
        return true;
    }else{
        return false;
    }
 });

 console.log('VALIDOS', nombresValidos);

/**.some() 
 * NOS PERMITE EJECUTAR UN CONDICIONAL SOBRE CADA ELEMENTO Y NOS DEVUELVE 
 * TRUE SI ALGUN ELEMENTO CUMPLIO LA CONDICION
*/

const nombresValidoSome = nombresEvery.some((nombre)=>{//VALIDAMOS SI TODOS SON STRING
   if(typeof nombre !== 'string'){//VALIDO SI ALGUNO QUE SEA DIFERENTE DE STRING
       return true;
   }else{
       return false;
   }
});

console.log('INVALIDOS', nombresValidoSome);
