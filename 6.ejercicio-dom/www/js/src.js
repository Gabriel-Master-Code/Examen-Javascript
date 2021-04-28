'use strict';
/* 
# Ejercicio 6

Subraya (manipulando el DOM) todas las palabras de los párrafos en "ejercicio.html" que 
contengan más de 5 letras.

*/

const parrafos = document.querySelectorAll('p');

console.log(parrafos);

let palabras = document.querySelectorAll(parrafos.children && /[a-z]{5,}/);
console.log(palabras);


