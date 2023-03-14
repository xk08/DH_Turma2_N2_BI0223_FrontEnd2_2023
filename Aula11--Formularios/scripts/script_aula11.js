/* 1 - Capturar as informações vindas do HTML e obter os valores com o JS */
let nomeUsuario = document.getElementById("nome");
let alturaUsuario = document.getElementById("altura");
let bioUsuario = document.getElementById("biografia");

let btnSalvar = document.getElementById("salvar");
btnSalvar.addEventListener("click", function (evento) {

    //Validação do nome (Campo obrigatorio)
    if (nomeUsuario.value) { //True - Sucesso

        evento.preventDefault(); //Cancela o comportamento padrão do formulário
        console.log(`Nome usuário: ${nomeUsuario.value}`);
        console.log(`Altura usuário: ${alturaUsuario.value}`);
        console.log(`Biografia usuário: ${bioUsuario.value}`);

        /* 2 - Normalizar as informações obtidas */
        let nomeNormalizadoMinusculas = nomeUsuario.value.toLowerCase(); //Normaliza para Minusculas
        console.log(`Nome usuário (Minusculas): ${nomeNormalizadoMinusculas}`);

        let nomeSemEspacos = nomeNormalizadoMinusculas.trim();
        console.log(`Nome usuário (Sem espaços): ${nomeSemEspacos}`);

        //Separando nome e sobrenome
        let nomeSeparado = nomeSemEspacos.split(" ");
        console.log(nomeSeparado);

        //Manipulando o checkbox do formulário
        let checkbox = document.getElementById("checkbox");
        console.log(checkbox.checked);
    }
});





