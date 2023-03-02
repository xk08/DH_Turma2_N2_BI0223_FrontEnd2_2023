//// INTERAÇÃO COM A LISTA DE FELINOS

// Criando uma nova informação (novo felino)

//Criando a div do novo felino
let div = document.createElement("div");
div.classList.add("item");

//Criando objeto JS que representa o novo felino
let felino = {
    img: 'https://www.infoescola.com/wp-content/uploads/2010/06/tigre-siberiano-116960752.jpg',
    titulo: 'O Novo tigre',
    descricao: 'In excepteur aliquip nisi dolor. Reprehenderit ea irure cillum aliquip commodo pariatur sit minim nulla. Amet mollit anim aute exercitation non aliquip laborum. Irure amet incididunt Lorem pariatur consequat velit consequat amet.'
}

//Adicionar os demais elementos a div (pai)
div.innerHTML = `
                <img src="${felino.img}">
                <h2>${felino.titulo}</h2>
                <p>
                    ${felino.descricao}
                </p>
                `;

//Capturando o elemento pai
let containerFelinos = document.getElementById("containerFelinos");
console.log(containerFelinos);

//Parametro esquerda: Novo elemento adicionado - Parametro da direita: Comparação no array 
containerFelinos.insertBefore(div, containerFelinos.children[3]);

//Adicionando um novo elemento (div) ao elemento pai
containerFelinos.appendChild(div);

//Removendo um elemento do DOM:
containerFelinos.removeChild(containerFelinos.children[2]);