'use strict';

/* 
# Ejercicio 5
    Consigue una lista con los nombres de los personajes de la serie Rick and Morty que aparecen
    en los episodios lanzados en el mes de enero (el año no importa).
    Utiliza llamadas a la API: 'https://rickandmortyapi.com/api/' 
*/


function getData(url) {
    return fetch(url).then((response) => response.json());
}


async function nombres() {
    const url = 'https://rickandmortyapi.com/api/episode';
    const info = await getData(url);
    const resultados = info.results;
    console.log(resultados);

    const meses = resultados.filter((resultado) => resultado.air_date.includes('January'));
    console.log(meses);
    const nombres = meses.filter((mes) => mes.name);
    console.log(nombres);
    
    
    function fetchData(url) {
            return fetch(url).then((response) => {
            //console.log(response);
            //console.log(response.json());
            return response.json();
        });
    }
}

nombres();