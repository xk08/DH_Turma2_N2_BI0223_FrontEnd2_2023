
let jwt;

let listaTarefasGlobal = [];

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

    /// Exibindo a animação de Skeletons na página;

    renderizarSkeletons(3, ".tarefas-pendentes");
    renderizarSkeletons(2, ".tarefas-terminadas");

    try { //Tentar executar uma ação/fluxo
        let respostaApi = await fetch(`${apiBaseURL()}/tasks`, configRequest);


        if (respostaApi.status == 201 || respostaApi.status == 200) {
            let dados = await respostaApi.json();

            setTimeout(() => {
                renderizaTarefasUsuario(dados);
            }, 1500);

        } else {
            throw respostaApi;
        }
    } catch (error) {
        //Exceção

        /// Remover os skeletons da tela
        removerSkeleton(".tarefas-pendentes");
        removerSkeleton(".tarefas-terminadas");
        console.log(error);
    }
}

function renderizaTarefasUsuario(listaTarefas) {


    /// Remover os skeletons da tela
    removerSkeleton(".tarefas-pendentes");
    removerSkeleton(".tarefas-terminadas");


    listaTarefasGlobal = listaTarefas;

    //Elemento pai
    let tarefasPendentesDom = document.querySelector(".tarefas-pendentes");

    for (let tarefa of listaTarefas) {
        console.log(tarefa);

        if (tarefa.completed) {
            console.log("Tarefa concluída");
        } else {
            // Tarefas pendentes
            console.log("Tarefa pendente");

            // Criando um novo item <li>
            let li = document.createElement("li");
            li.classList.add("tarefa");

            li.innerHTML = `
                            <div class="not-done" id="${tarefa.id}" onclick="editarTarefa(${tarefa.id})"></div>
                            <div class="descricao">
                                <p class="nome">${tarefa.description}</p>
                                <p class="timestamp"><i class="far fa-calendar-alt"></i> ${tarefa.createdAt}</p>
                            </div>
                         `;

            tarefasPendentesDom.appendChild(li);
        }
    }
}

/// Editar tarefa selecionada
function editarTarefa(idTarefa) {

    /* Sugestão: Buscar as informações da tarefa, com base no ID recebido na função */
    let tarefa = listaTarefasGlobal.find(e => e.id == idTarefa);
    console.log(tarefa.id);
    console.log(tarefa.description);
    console.log(tarefa.completed);
    console.log(tarefa.createdAt);

    ///Chamar a API pra fazer a edição.
}


// CADASTRANDO UMA NOVA TAREFA
let botaoCadastrar = document.getElementById("botaoTarefas");

botaoCadastrar.addEventListener('click', evento => {

    evento.preventDefault();

    let descricaoTarefa = document.getElementById('novaTarefa');

    /* DICA: Esta é uma validação "simples" - A descrição exigida pelo trabalho é mais detalhada quanto a isso!! */
    if (descricaoTarefa.value != "") {

        //Cria objeto JS que será convertido para JSON
        let objetoTarefa = {
            description: descricaoTarefa.value
        }

        let objetoTarefaJson = JSON.stringify(objetoTarefa);

        let configuracoesRequisicao = {
            method: 'POST',
            body: objetoTarefaJson,
            headers: {
                // Preciso passar ambas propriedades pro Headers da requisição
                'Content-type': 'application/json', //responsável pelo Json no Body
                'Authorization': `${jwt}` //responsável pela autorização (vem do Storage/jwt)
            },
        }

        /// Chamando a API (com promisses)
        fetch(`${apiBaseURL()}/tasks`, configuracoesRequisicao)
            .then((response) => {
                if (response.status == 201) {
                    return response.json()
                }
                //Se o código for diferente de sucesso (201), lança um throw para que a execução caia no bloco Catch() 
                throw response;
            }).then(resposta => {
                tarefaSucesso(resposta)
            })
            .catch(error => {
                tarefaErro(error)
            });
    } else {
        evento.preventDefault();
        alert("Você deve informar uma descrição para a tarefa")
    }
});

let tarefaSucesso = (resposta) => {
    alert("A tarefa foi cadastrada!");
    console.log(resposta);
    window.location.reload();
}

let tarefaErro = (erro) => {
    alert("Ocorreu algum erro ao cadastrar a tarefa!");
    console.log(erro);
}

function finalizaSessao() {
    console.log("saiu...");

    Swal.fire({
        title: 'Sair',
        text: "Realmente deseja sair da página?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#5635A1',
        cancelButtonColor: '#45A861',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
    }).then((result) => {
        if (result.isConfirmed) {
            sessionStorage.removeItem("jwt");
            window.location.href = "index.html";
        }
    })
}