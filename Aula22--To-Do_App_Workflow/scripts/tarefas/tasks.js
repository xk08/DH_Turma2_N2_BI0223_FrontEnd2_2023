
let jwt;

/// Criando comportamento automático da página
onload = function () {
    console.log("A página carregou automáticamente.");

    /// Buscando o token JWT do usuário logado
    jwt = sessionStorage.getItem("jwt");

    /// Executa as ações automáticas da pagina
    buscaUsuarioApi();
    buscaTarefasApi();

}

async function buscaUsuarioApi() {
    ///Async/Await
    let configRequest = {
        headers: {
            'Authorization': jwt
        }
    }

    try { //Tentar executar uma ação/fluxo
        let respostaApi = await fetch(`${apiBaseURL()}/users/getMe`, configRequest);


        if (respostaApi.status == 201 || respostaApi.status == 200) {
            let dados = await respostaApi.json();
            renderizaNomeUsuario(dados);
        } else {
            throw respostaApi;
        }
    } catch (error) {
        //Exceção
        console.log(error);
    }
}

function renderizaNomeUsuario(usuario) {
    let nomeUsuarioP = document.getElementById("nomeUsuario");
    nomeUsuarioP.innerText = `${usuario.firstName} ${usuario.lastName}`
}

async function buscaTarefasApi() {
    ///Async/Await
    let configRequest = {
        headers: {
            'Authorization': jwt
        }
    }

    try { //Tentar executar uma ação/fluxo
        let respostaApi = await fetch(`${apiBaseURL()}/tasks`, configRequest);


        if (respostaApi.status == 201 || respostaApi.status == 200) {
            let dados = await respostaApi.json();
            renderizaTarefasUsuario(dados);
        } else {
            throw respostaApi;
        }
    } catch (error) {
        //Exceção
        console.log(error);
    }
}

function renderizaTarefasUsuario(tarefas) {
    console.log(tarefas);
}



