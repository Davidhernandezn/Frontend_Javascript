//CADENA DE TEXTO
const nombre = 'David';
const parrafo = "Esto es un 'parrafo'";//SI AFUERA ES CON COMILLA DOBLE Y QUEREMOS AGREGAR COMILLAS AGREGAR COMILLA SIMPLE
//SOLO COMILLA SIMPLE
const parrafo3 = 'Estp es un \'parrafo\'';
console.log(parrafo3);

//NUMERO
const numero = 4;
const numero2 = -4.31;

//Booleano, para condicionales
const usuarioConectado = false;
const mayorQue = 1 > 2;
console.log(mayorQue); 

//ARRAYS - Arreglos, de cualquier tipo, 
const arreglo = [1,108,5];
const arregloMultiple = ['texto', 456, true,{propiedad: 'valor'},
[1,2,3]];

console.log(arreglo);

//objeto- guarda informacion en parejas con clave y valor
const persona = {
    nombre: 'Carlos',
    edad: 23,
    carro:{
        marca:'...',
        color:'negro',
    },
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.carro.color);//ACCEDER A VALORES

//FUNTION
//BLOQUES DE CODIGO A REUTILIZAR
//DEFINIR FUNCION
function hola(){
    console.log('Hola');
}

hola();//LLAMADA DE FUNCION

//TIPOS DE VALORES NULL 
//REINICIAR VALOR DE UNA VARIABLE

//UNDEFINED
//NO USARLO O ESTABLECERLO YA QUE JS NOS INDICA CUANDO NO HAY VALOR

