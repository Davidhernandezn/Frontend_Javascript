/**OPERADOR SPREAD
 * PERMITE TOMAR LOS ELEMENTOS DE UN ARREGLO U OBJETO Y EXPANDIRLOS EN OTRO SITIO
 */

//AMBOS SON COMIDA
const frutas = ['Manzana', 'Naranja','Piña'];//TOMAR ELEMENTOS
const comidaFavorita = ['Pizza', 'Sushi', ...frutas];//AGREGARLOS AQUI
console.log(comidaFavorita);


//OBJETO
const datosLogin = {
    nombre: 'David',//SOBRE ESCRIBIR DATOS EN CADENA
    correo: 'correo@correo.com',
    password: '123',
};

const usuario ={
    nombre: 'Arturo',
    edad:27,
    ...datosLogin
}
console.log(usuario);


/**PARAMETRO REST
 * PERMITE QUE UNA FUNCION CONTENGA UN NUMERO INDEFINIDO DE ARGUMENTOS.
 * LOS ARGUMENTOS EXTRA QUE ENCUENTRE LOS CONVERTIRA EN UN ARREGLO
 * AL AGREGAR ...datosAdicionales los datos que se envien de mas lo aguarda aqui*/
const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
    console.log(nombre, correo, datosAdicionales);
};

registrarUsuario('DAVID', 'email@gmail.com');
registrarUsuario('ALejandro', 'alex@gmail.com', 28, 'España');//

/**DESTRUCTURACION
 * NOS PERMITE OBTENER ELEMENTOS O PROPIEDADES DE UN ARREGLO U OBJETO Y GUARDARLOS EN UNA VARIABLE*/
const amigos = ['Alex', 'Fer', 'Karo'];

const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;
console.log(segundoAmigo);

//TAMBIEN CON OBJETOS
const persona = {
    nombre: 'KARIN',
    correo: 'KARIN@correo.com',
    password: '1EFQVS23',
    edad:25
}

//DESTRUCTURACION
const {correo, nombre} =persona;
console.log(nombre, correo);

//VER EDAD CONCATENAR
const mostrarEdad = (nombre,edad) =>{
    console.log(`${nombre} tiene ${edad} años`);
}

mostrarEdad(persona.nombre, persona.edad);//SETEAR LOS DATOS O MANDARLOS POR SU NOMBRE

//FORMA 2
//VER EDAD CONCATENAR
const mostrarEdadDos = ({nombre,edad}) =>{//SOLO LO QUE VA A EXTRAER
    console.log(`${nombre} tiene ${edad} años`);
}

mostrarEdadDos(persona);//MANDAR TODO EL OBJETO

