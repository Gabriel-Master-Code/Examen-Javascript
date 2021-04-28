'use strict';
/* 
Crea un programa que reciba un número en decimal o binario y devuelva la conversión:

-   Si le pasamos un nº en decimal debe retornar la conversión a binario.

-   Si le pasamos un nº en binario deberá devolver su equivalente decimal.

Para ello la función deberá recibir un segundo parámetro que indique la base: 10 (decimal) o 2 (binario).

No se permite utilizar el método parseInt(). */

function conversor(num, base){

    if(base==="binario"){
        // De número Decimal a Binario:
        // Funciona Ok.
        let resultado = num.toString(2);

        return resultado;

    }else if(base==="decimal"){
        // De número Binario a Decimal:
        // De Momento No me Está funcionando, el por que?: nolosé;
        let resultado2 = num.toString(10);

        return resultado2;
    }else{
        console.error("Te has equivocado de Base");
    }

}
console.log(conversor(15, "binario"));

//https://docs.microsoft.com/es-es/dotnet/api/system.convert.tostring?view=net-5.0

