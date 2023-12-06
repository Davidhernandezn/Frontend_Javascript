//AND OR NOT

const nombre = 'Carlos';
const edad = 15;
const entrada = true;
const permiso = true;
const permitirAcceso = edad >= 18 && entrada;
console.log('Acceso permitido: '+ permitirAcceso);

//OR
const validarAcceso = (edad >= 18 && entrada) || (permiso && entrada);
console.log('INGRESO: '+validarAcceso);

//NOT INVIERTE VALOR T - F  F-T
const variable = true;
console.log('NOT '+!variable);