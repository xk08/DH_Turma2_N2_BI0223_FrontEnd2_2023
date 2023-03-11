/* Tipos de funções em JS */

// Função declarada ou declarativa

let usuario = {
    nome: "Marcos",
    idade: 25
}

let informacaoRetornada = boasVindasUsuario(usuario);
console.log(informacaoRetornada);

function boasVindasUsuario(usuarioRecebido) { //Assinatura da função
    //Escopo desta função
    //return console.log(`O usuario ${usuarioRecebido.nome} possui  ${usuarioRecebido.idade} anos`)
    return `O usuario ${usuarioRecebido.nome} possui ${usuarioRecebido.idade} anos`;
}


// Funções expressadas ou funções de expressão
let exibeIdade = function () {
    console.log("A idade do usuário é 25 anos");
}

let exibeIdade = () => console.log("A idade do usuário é 25 anos");
exibeIdade();



// Funções aninhadas - Closures 

function boasVindas() {

    function exibeNomeUsuario() {
        //console.log("O nome é: Marcos");
    }

    exibeNomeUsuario();

}

boasVindas();


// Funções de CallBacks (Função que recebe uma função como parametro e a executa)
let executaCalculo = function (funcaoRecebidaPorCallback) {

    let numero1 = 10;
    let numero2 = 20;
    let resultado = funcaoRecebidaPorCallback(numero1, numero2); //Executando a função recebida por parametro
    console.log(resultado);

}

function somar(numero1, numero2) {
    return numero1 + numero2;

}
function subtrair(numero1, numero2) {
    return numero1 - numero2;

}

executaCalculo(somar);
executaCalculo(subtrair);

//Exemplos de função de callBack que já utilizamos

let frutas = ["Maça", "Pera", "Uva"];
frutas.forEach(function (fruta) {
    console.log(fruta);
})

let btn = document.getElementById("botaoEnviar");
btn.addEventListener("click", function () {
});
