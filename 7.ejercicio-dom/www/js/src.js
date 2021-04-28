'use strict';

/* 
# Ejercicio 7

Crea una malla de cuadrados de tal forma que el color de cada uno de ellos se determine de forma
aleatoria y vaya cambiando cada segundo.

![Ejemlo](exemplo.png)

Añade también un botón que permita añadir un nuevo cuadrado a la maya con las mismas propiedades
que los anteriores.

*/

import { randomNumber as r } from './helpers.js';

const tds = document.querySelectorAll('td');

function changeBackgroud() {
    for (const td of tds) {
        const color = `rgb(${r(255)}, ${r(255)}, ${r(255)})`;
        td.style.backgroundColor = color;
    }
}
const table = document.querySelector('table'); //Seleccionamos la tabla
const fila = document.querySelector('tr'); //Seleccionamos la fila
const casilla = document.createElement('td'); //Creamos la casilla
const boton = document.querySelector("button"); //Seleccionamos el boton
if(boton){
    table.appendChild(fila); //Seleccionamos la ultima fila de la tabla
    fila.appendChild(casilla); //Creamos la casilla  de la ultima fila de la tabla

}
setInterval(changeBackgroud, 1000);