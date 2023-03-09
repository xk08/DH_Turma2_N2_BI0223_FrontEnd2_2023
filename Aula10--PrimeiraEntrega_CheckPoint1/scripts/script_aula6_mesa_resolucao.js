/* 
    Prof Marcos Martins (CTD - Front end II) 
    Possível solução para a mesa de trabalho da Aula 6.
*/

/* Declara a lista de objetos com a descrição dos felinos */
const listafelinos = [
    {
        titulo: "O tigre",
        descricao: `O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) 
        pertencente ao gênero Panthera. É encontrado de forma nativa apenas no 
        continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.`,
        imgURL: "./imagens/tiger.jpg"
    },
    {
        titulo: "O leão",
        descricao: `O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero
        gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África
        subsahariana
        (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da
        Índia.`,
        imgURL: "./imagens/leon.jpg"
    },
    {
        titulo: "O leopardo",
        descricao: `O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros
        felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso
        hióide que lhes permite rugir.
        É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra
        (melanista).`,
        imgURL: "./imagens/leopardo.jpg"
    },
    {
        titulo: "A pantera negra",
        descricao: `A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o
        leopardo (Panthera pardus) e a onça-pintada (Panthera onca).
        Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma
        variação negra destes animais.`,
        imgURL: "./imagens/pantera-negra.jpg"
    },
    {
        titulo: "O jaguar",
        descricao: `O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do
        gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também
        é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera
        leo).`,
        imgURL: "./imagens/jaguar.jpg"
    },
    {
        titulo: "O guepardo",
        descricao: `O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único
        representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre
        mais rápido
        do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.`,
        imgURL: "./imagens/chita.jpg"
    },
    {
        titulo: "O guepardo 2.0",
        descricao: `O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único
        representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre
        mais rápido
        do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.`,
        imgURL: "./imagens/chita.jpg"
    },
];

///PRIMEIRA PARTE

let h1Novo = document.querySelector("h1");
console.log(h1Novo);

h1Novo.setAttribute("marcos", "titulo");
console.log(h1Novo);

let img = document.createElement("img");
img.setAttribute("src", "https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png");
img.setAttribute("width", "120px")
img.setAttribute("height", "120")
document.body.appendChild(img);


///SEGUNDA PARTE
//Capturar o elemento pai
let elementoPai = document.getElementById("elementoPai");

// Definir função que renderiza os elementos pegos na lista

function renderizaElementosEmtela() {

    //Percorrer a lista de felinos
    for (let felino of listafelinos) {
        console.log(felino.titulo);

        // Criar um novo card e seu template
        let novaDiv = document.createElement("div");
        novaDiv.setAttribute("class", "item");
        //novaDiv.classList.add("item");

        novaDiv.innerHTML = `
                                <img src="${felino.imgURL}">
                                <h2>"${felino.titulo}</h2>
                                <p>
                                "${felino.descricao}
                                </p>
                            `;

        //Adicionar o novo card a lista (elemento pai)
        elementoPai.appendChild(novaDiv);
    }

}

//Executa a função que renderiza os elementos
renderizaElementosEmtela();