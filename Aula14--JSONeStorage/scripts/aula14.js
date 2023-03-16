/* Objetivo da aula 14: Conhecer e praticar alguns cocneitos sobre JSON e Storage */

//// Storage

//Setando novos itens no armazenamento
localStorage.setItem("1", "valor 1");
localStorage.setItem("2", "valor 2");
localStorage.setItem("3", "valor 3");
localStorage.setItem("4", "valor 4");
console.log(localStorage);

//Editando um valor em uma chave já existente
localStorage.setItem("1", "Novo valor");

// Removendo itens do Storage
localStorage.removeItem("1");
localStorage.removeItem("4");

// Buscando um item no Storage com base em sua "chave"
let conteudo2 = localStorage.getItem("3");
console.log(conteudo2);


//// Manipulando JSON e objeto Literal JS

//Objeto JS
let usuario = {
    nome: "Marcos Martins",
    idade: 25,
    cidade: "São Borja"
}

//Objeto JSON
/* "{
        "nome": "Marcos Martins",
        "idade": 25,
        "cidade": "São Borja"
    }" */

localStorage.setItem("usuario", JSON.stringify(usuario));

let usuarioArmazenado = localStorage.getItem("usuario")

//Decodificando o objeto JSON em objeto literal JS
let usuarioDecodificado = JSON.parse(usuarioArmazenado);
console.log(usuarioDecodificado.nome);