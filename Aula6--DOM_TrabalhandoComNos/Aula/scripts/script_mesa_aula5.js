/* 
    Prof Marcos Martins (CTD - Front end II) 
    Possível solução para a mesa de trabalho da Aula 5.
*/

let body = document.querySelector("body");
//console.log(body.classList);

let h1 = document.querySelector("h1");

let cards = document.querySelectorAll(".item");
//console.log(cards);

function alteraTemaComToggle(){
    body.classList.toggle("body-dark");
    h1.classList.toggle("h1-dark");

    for(let card of cards){
        card.classList.toggle("items-dark");
        card.classList.toggle("items-text-dark");
    }
}