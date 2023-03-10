/* Atributos dinâmicos */

/*
Principais tipos de eventos que temos:
- Eventos de tela/pagina
- Eventos de formulários
- Eventos de mouse
- Eventos de teclado
*/

///@@@@Eventos de janela/pagina

function boasVindasUsuario() {
    alert("seja bem-vinda(o)");
}

window.onload = function () {
    //boasVindasUsuario();
}

///@@@@Eventos de formulários

function exibeIdadeUsuario() {
    let idade = document.getElementById("textIdade");
    console.log(idade.value);
    console.log("Disparou evento de click do mouse");
}

///@@@ Eventos do mouse (onClick)


let botaoEnviar = document.getElementById("botaoEnviar");
//console.log(botaoEnviar);

//Propriedade que dispara o evento
//botaoEnviar.onclick = exibeIdadeUsuario;

//Listner que dispara o evento

//1° evento
botaoEnviar.addEventListener("click", function () {
    console.log("Clicou no botão de enviar");
});

//2° evento
/* botaoEnviar.addEventListener("mouseover", function(){
    console.log("Cursor do mouse, está em cima do botão");
}); */

///@@@ Eventos do mouse, além do onClick
botaoEnviar.addEventListener("mouseover", function () {
    console.log("Cursor está em cima do botão");
    botaoEnviar.style.width = "120px"
    botaoEnviar.style.backgroundColor = "#28D46D"
});

botaoEnviar.addEventListener("mouseout", function () {
    console.log("Cursor saiu de cima do botão");
    botaoEnviar.style.width = "50px"
    botaoEnviar.style.backgroundColor = "#ffff"
});


///@@@@@ Eventos de teclado
let nome = document.getElementById("textNome");
nome.addEventListener("keydown", function (evento) {
    console.log(`Você pressionou a tecla ${evento.key}`);
});