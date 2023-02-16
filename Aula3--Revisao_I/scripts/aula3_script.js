// FOR IN
// -> Iteração sobre um objeto JS

 //Definindo o objeto em JS
 let usuario = {
    nome: "Marcos Martins",
    idade: 25,
    eProfessor: true,
    endereco: {
        cidade: "São Borja",
        estado: "RS"
    }
};

//console.log(usuario);

//FOR IN
for (let objeto in usuario) {
    /* console.log(objeto);
    console.log(usuario[objeto]); */
}

//FOR OF
// -> Iteração sobre um Array JS

// Definindo o Array
let arrayFrutas = ["Mamão", "Pera"];
arrayFrutas.push("Banana");
arrayFrutas.push("Morango");
arrayFrutas.push("Maça");

//console.log(arrayFrutas);

//Versão classica do For
for (let i = 0; i < arrayFrutas.length; i++) {
    //console.log(arrayFrutas[i]);
}

//Facilidades do JS
for (let item of arrayFrutas) {
    //console.log(item);
} 

//ForEach
function exibeFrutas(frutaRecebida) {
    //console.log(frutaRecebida);
}
arrayFrutas.forEach(exibeFrutas);

//ou 
arrayFrutas.forEach(function(fruta){
    //console.log(fruta);
});

arrayFrutas.forEach(fruta => { //ou direto com a arrow function
    //console.log(fruta);
});

//Ainda mais simples....
//arrayFrutas.forEach(fruta => console.log(fruta));

function exibeNomeUsuario(nome){
    console.log(nome);
}

/* Exportando um recurso (uma função) que poderá ser utilziado por outro script */

//Define qual função será exportada deste script (Se apenas uma for exportada)
export default exibeNomeUsuario; 

//Define qual função será exportada deste script (Se mais de uma for exportada)
//export {exibeNomeUsuario}; 