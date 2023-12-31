//PODEMOS GUARDAR MULTIPLES VALORES
// ES MAS COMUN USAR CONST
// BRACKETS [] 
//PODEMOS AGREGAR UN ARRREGLO DENTRO DE UN ARREGLO
const arreglo = ['Texto',523.41, false,{ propiedad:'valor' }, [1,2,3]];
console.log(arreglo);

const amigos = ['Alex', 'Cesar', 'Pedro'];
console.log(amigos);
console.log('IMPRIMIR UNA POSICION ',amigos[2]);

const colores=[];
colores[0] = 'Rojo';
colores[1] = 'Verde';
colores[3] = 'Balanco';//SI AGREGAS UN DATO SALTANDOSE VALORES LO AGREGA VACIO
colores[3] = 'AMARILLO';//SOBRE ESCRIBIR

//LOS ARREGLOS SON OBJETOS YA QUE TIENE PROPIEDADES Y METODOS

console.log(colores);
console.log(colores.length);//CATIDAD DE ELEMENTOS DEL ARREGLO

//AGREGAR NUEVO VALOR A UN ARREGLO SIN DECIR QUE POSICION
colores.push('Azul');
console.log(colores);
