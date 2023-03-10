/* 
    Prof Marcos Martins (CTD - Front end II) 
    Possível solução para a mesa de trabalho da Aula 5.
*/

//Capturando os elementos, através dos seletores do DOM
let body = document.querySelector('body');
let h1 = document.querySelector('h1');



/* Função que é chamada pelo onChanged ao clicar no ToggleSwitch */
function alteraTemaComToggle() {

    let itemsList = document.querySelectorAll('.item');


    /* Adicionando/removendo as classes (dark-mode) css nos elementos capturados */
    body.classList.toggle('body-dark');
    h1.classList.toggle('h1-dark');
    //2) Percorrendo com o ForEach
    itemsList.forEach(item => {
        item.classList.toggle('items-dark');
        item.classList.toggle('items-text-dark');
    });
}