'use strict';
import { getData } from './helpers.js';


//Escribe una función que devuelva un array de usuarios. De cada usuario guardaremos el username, el nombre y apellido, el sexo, el país, el email y un enlace a su foto de perfil.
//El número de usuarios a obtener se debe indicar con un parámetro de dicha función.
//Pedir a la api (https://randomuser.me/api/?results=??) el numero de personas correspondientes.
//Por cada persona, creamos la siguiente estructura:
/* 

    <article>
        <p>nombre apellido</p>    
        <p>username</p>
        <p>sexo</p>
        <p>país</p>
        <p>email</p>
        <p>
            <a href="...">enlace a su foto de perfil</a>
        </p>
    </article>

*/

const main = document.querySelector('main');
function crearUsuarios(listaUsuarios){
    const fragment = document.createDocumentFragment();
    for (const user of listaUsuarios){
        const article = document.createElement("article");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const p4 = document.createElement("p");
        const p5 = document.createElement("p");
        const p6 = document.createElement("p");
        const a = document.createElement("a");

        const name = `name: ${user.name.first}, ${user.name.last}`;
        p1.textContent = name;
        const username = `username: ${user.login.username}`;
        p2.textContent = username;
        const sexo = `sexo: ${user.gender}`;
        p3.textContent = sexo;
        const pais = `País: ${user.location.country}`;
        p4.textContent = pais;
        const email = `Email: ${user.email}`;
        p5.textContent = email;
        a.setAttribute("href", `${user.picture.large}`);
        a.textContent = `Foto de ${user.name.first}, ${user.name.last}`;

        article.append(p1);
        article.append(p2);
        article.append(p3);
        article.append(p4);
        article.append(p5);
        p6.append(a);
        article.append(p6);


        fragment.append(article);

        article.style.cssText = 'background : yellow; height :15rem; width:23%; float:left; margin:10px;';
        p1.style.cssText = "padding-left : 5%; background : cyan; text-transform : uppercase; font-weight : bold";
        p2.style.paddingLeft = "5%";
        p3.style.paddingLeft = "5%";
        p4.style.paddingLeft = "5%";
        p5.style.paddingLeft = "5%";
        p6.style.paddingLeft = "5%";
    }
    main.append(fragment);
}

async function mainFunction(num){
    const url = `https://randomuser.me/api/?results=${num}`;

    const data = await getData(url);

    const users = data.results;

    crearUsuarios(users);
}

mainFunction(12);