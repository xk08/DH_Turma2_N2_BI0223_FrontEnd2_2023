// [1] - Modelos de texto  - Template Strings
alert("Marcos"+" Martins") //Concatenação

let nomeUsuario = "Marcos Martins";

function exibeNomeUsuario(nomeRecebido){
    return "Marcos Martins";
}

alert(`Seja bem-vindo, usuário ${exibeNomeUsuario()}`); //Interpolação
alert(`O resultado da soma foi: ${4+4}`); //Interpolação


// [2] - Modificando elementos com o DOM

// innerText - Modifica o conteúdo textual
let h1 = document.querySelector("h1");
h1.innerText = "Aula 5"
console.log(h1);

// innerHTML - Insere internamente um conteúdo ou elemento ou tag
let h3 = document.querySelector("h1");
h3.innerHTML = "<h3>Aula 5</h3>"

// outerHTML - Insere internamente um conteúdo ou elemento ou tag
let h3 = document.querySelector("h1");
h3.outerHTML = "<h3>Aula 5</h3>"


// [3] - Modificando as propriedades de estilização dos elementos
let h1 = document.querySelector("h1");
console.log(h1);
h1.style.color = "#401179";
h1.style.textAlign = "center";


// [4] Modificando a classe dos elementos
let h1 = document.querySelector("h1");
h1.classList.add("novo-h1");
h1.classList.toggle("novo-h1");