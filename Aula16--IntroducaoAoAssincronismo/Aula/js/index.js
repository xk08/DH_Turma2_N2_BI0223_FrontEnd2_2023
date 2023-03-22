/* Aula 16 - Introdução ao assincronimso e Promises */
/* Nesta aula estamos apenas "Simulando" requisições assincronas ao utilizar as promises */

let validacao = true;

let novaPromisse = new Promise(function (resolve, reject) {

    setTimeout(() => {

        if (validacao) { //Validação passou
            resolve("Promisse deu certo");

        } else {
            reject("A promisse falhou");
        }

    }, 3000);
})

//Resolvendo a promisse
novaPromisse.then(
    function (resultado) {
        console.log("Primeiro Then");
        //console.log(resultado);
        return resultado;
    }
).then(
    function (resultado) {
        console.log("Segundo Then");
        //console.log(resultado);
        exibeResultado(resultado);
    }
)
    .catch(
        function (erro) {
            console.log(erro);
        }
    );


function exibeResultado(resultado) {
    console.log(resultado);
}

