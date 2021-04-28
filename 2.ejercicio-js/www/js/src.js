'use strict';
/* 
Crea un programa que imprima cada 5 segundos el tiempo desde la ejecución del mismo. 
Formatea el tiempo para que se muestren los segundos, los minutos, las horas y los días 
desde la ejecución. 
*/

const temporizador = document.querySelector("h1");

function format(num){
    if(num < 10){
        return "0" + num;
    }
    return num;
}

function actualizarTemporizador(){
    const now = new Date();
    const horas = format(now.getHours());
    const minutos = format(now.getMinutes());
    const segundos = format(now.getSeconds());
    const dias = format(now.getDate());

    temporizador.textContent = `${horas}:${minutos}:${segundos} Dia: ${dias}`;
}
setInterval(actualizarTemporizador,5000);
