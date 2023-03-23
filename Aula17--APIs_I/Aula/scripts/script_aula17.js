let quantidadeFormulario = document.getElementById('quantidadeFormulario');
let botaoPesquisar = document.getElementById('botaoPesquisar');
let exibeResultado = document.getElementById('exibeResultado');

botaoPesquisar.addEventListener('click', function (evento) {
    evento.preventDefault();

    if (quantidadeFormulario.value != "") {
        // BaseURL + EndPoint  = URL da API/Servidor
        fetch(`https://dog.ceo/api/breeds/image/random/${quantidadeFormulario.value}`)
            .then(
                //Resolve a primeira parte da promise, mas, ainda não tem acesso aos dados do corpo da resposta.
                function (resultado) {
                    return resultado.json(); // transforma o objeto json (assincrono) para objeto js literal
                }
            )
            .then(
                function (data) {
                    //Tem acesso ao conteúdo 'data' vindo da resposta da requisição
                    renderizaFotosCachorrosDom(data); //envia o objeto recebido para uma função específica
                })
            .catch(
                function (erro) {
                    console.log(erro);
                }
            )

    } else {
        alert("Você deve informar o número de imagens que deseja buscar")
    }
});

function atualizaPagina() {
    window.location.reload();
}

function renderizaFotosCachorrosDom(fotosCachorrosLista) {
    //Percorrendo o Array com as fotos
    for (let cachorroImg of fotosCachorrosLista.message) {

        //Cria um novo elemento img no html
        let img = document.createElement("img");

        //Adiciona a URL da imagem do cachorro ao elemento img
        img.src = cachorroImg;

        //Adiciona a img a lista (elemento pai)
        exibeResultado.appendChild(img);
    }
}