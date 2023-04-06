function exibeLoader() {

    let div = document.createElement("div");
    div.classList.add("loader");

    let botaoLogin = document.getElementById("botaoAcessarLogin");

    botaoLogin.innerText = "";

    botaoLogin.appendChild(div);
}


function ocultaLoader() {

    let div = document.querySelector(".loader");

    let botaoLogin = document.getElementById("botaoAcessarLogin");

    botaoLogin.removeChild(div);

    botaoLogin.innerText = "Acessar";
}