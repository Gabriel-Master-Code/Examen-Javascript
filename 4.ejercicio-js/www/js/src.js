'use strict';

/* # Ejercicio 4

Escribe una función que, al recibir un array como parámetro, elimine los strings 
repetidos del mismo.
No se permite hacer uso de Set ni Array.from().

```javascript
*/


const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];


//Este sería el array original:
console.log("Array Original sin Modificar: ",names);

// Con Filter :
function filtrar(){
    // Lo que hace es comparar un elemento actual con los que pasaron en
    // la comparación, si el indice del elemento del array actual es igual al de la
    //comparación nos lo quedamos y si no lo es significa que está repetido.
    return names.filter((item, idx) => names.indexOf(item) === idx)
}
//Este sería el array con Filter:
console.log("Utilizando Filter: ",filtrar(names)); 


//Con Reduce :

function reducir(){
    //Lo que hace es mirar si el acumulador(acc) no incluye el elemento del array names 
    //lo guarda en acc con el metodo push y después devuelve el acc,pues si lo incluye 
    // ya no lo guarda, porque sino estaría repetido. El resultado acc se guarda en un
    //nuevo array vacío indicado con los corchetes[] al final del método reduce.
    const resultado = names.reduce((acc,elemento)=>{
        if(!acc.includes(elemento)){
            acc.push(elemento);
        }
        return acc;
    },[])
    return resultado;
}

console.log("Utilizando Reduce: ", reducir(names)); 