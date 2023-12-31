//ERROR EN ARREGLOS (NO SABER QUE ES CADA ELEMENTO DE LA INFORMACION)
const personaArreglo = ['David', 26, 'email@gmail.com',true]

//ORGANIZAMOS LA INFO (PROPIEDADES)
const persona= {
    nombre: 'David',
    edad: 26,
    correo: 'email@gmail.com',
    suscripciones:{ 
        web: true,
        correo: true,
    },
    coloresFavoritos :['Negro', 'Rojo'],

    saludo:function(){
        alert('Hola!!!');
    }
};


console.log(persona);

//ACCEDER A PROPIEDAD EN ESPECIFICO
console.log(persona.nombre);

//SEGUNDA FORMA DE ACCERDER AL VALOR DE UNA PROPIEDAD
console.log(persona['edad']);

const variable = 'correo';
console.log(persona[variable]);

const variableObjeto = 'suscripciones';
console.log(persona[variableObjeto]);


console.log(persona.suscripciones.correo);

//AGREGAR VALORES A UN OBJETO
persona.pais= 'Mex';
persona.pais = 'ESP'//SOBREESCRIBIR 
console.log('NUEVO VALOR A OBJETO',persona)

//ACCEDER A LA FUNCION DE UN OBJETO (METODOS
persona.saludo();