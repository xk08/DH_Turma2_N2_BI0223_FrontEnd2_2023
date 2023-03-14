/* Objetivo: Capturar as informações vindas do HTML e obter os valores com o JS */
let nomeCapturado = document.getElementById("nome");
let idade = document.getElementById("idade");
let altura = document.getElementById("altura");
let email = document.getElementById("email");

let checkbox = document.getElementById("checkbox");
let listaItens = document.getElementById("listaItens");
let botaoCapturado = document.getElementById("salvar");

//Capturando os radio buttons
let radioButtons = document.getElementsByName("radioGrupo");

botaoCapturado.addEventListener("click", function(evento){

   if(nomeCapturado.value) {
       evento.preventDefault();

      /*  console.log("Exibindo informações do usuário\n");
       console.log(`Nome: ${nomeCapturado.value} `);
       console.log(`Idade: ${idade.value} `);
       console.log(`Altura: ${altura.value} `);
       
       //Lista de itens
       console.log(`Lista de itens: ${listaItens.value} `);

       //Checkbox
       console.log(`Checkbox: ${checkbox.value} `);
        */
       //RadioButons

       //let radioSelecionado;
       
       radioButtons.forEach(radio => {
           //console.log(`RadioButton: ${radio.checked} `);

           if (radio.checked) {
             //radioSelecionado = radio;
           }
       });

       //console.log(radioSelecionado.value);

   }

   normalizandoDados(nomeCapturado.value);

});

function normalizandoDados (nomeRecebido) {

  //TRIM (Retira espaços inicias e finais)
  let textoSemEspaco = retiraEspacos(nomeRecebido);
  console.log(`Com espaços: ${nomeRecebido}`);
  console.log(`Sem espaços: ${textoSemEspaco}`);

  let nomeNormalizado = transformaEmMaiusculas(textoSemEspaco);
  console.log(nomeNormalizado);

  //SPLIT (Fragmenta uma informação em um Array)
  let novoNome = nomeNormalizado.split(" ");
  console.log(novoNome);

  //REPLACE
  let alturaNormalizada = altura.value.replaceAll(".",",").replaceAll("1","!");
  console.log(alturaNormalizada);

}

function retiraEspacos(recebeTexto) {
  return recebeTexto.trim();
}

function transformaEmMaiusculas(recebeTexto) {
  return recebeTexto.toUpperCase();
}

function transformaEmMinusculas(recebeTexto) {
  return recebeTexto.toLowerCase();
}


/* Objetivo da aula 13: Realizar algumas validações nos campos do formulário*/

/* Nome e sobrenome:
  - Não pode ser vazio
  - Deve possuir ao menos 5 caracteres 
*/


/* E-mail:
  - Deve ter um formato válido (com RegExp) 
*/