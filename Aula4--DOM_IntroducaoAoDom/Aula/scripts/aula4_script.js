/* NESTA AULA, FAREMOS APENAS A CAPTURA DAS INFORMAÇÕES DO HTML, 
SEM MODIFICAR OU ADICIONAR E REMOVER ELEMENTOS */

//Vendo todo o objeto document
console.log(document);

let liList = document.querySelectorAll("li");
console.log(liList[4].innerText);

let liPegoPeloId = document.getElementById("item2");
console.log(liPegoPeloId);

let articleAnimado = document.querySelector(".animado");
console.log(articleAnimado.innerText);