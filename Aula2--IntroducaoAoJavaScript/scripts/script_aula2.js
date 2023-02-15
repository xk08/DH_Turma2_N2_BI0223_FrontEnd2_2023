/* @@@@ EXIBIÇÃO E CAPTURA DOS DADOS DO USUÁRIO
- Alert()
- Confirm()
- Prompt()
*/

//Indo além do console.log()...
//@@ ALERT()
alert("Olá usuário");

//@@ CONFIRM()
let valorEscolhido =  confirm("Deseja realmente sair?");
console.log(valorEscolhido);

if(valorEscolhido){ //True
    alert("Saiu da aplicação");
}else{ //false
    alert("Continua na aplicação");
}

//@@ PROMPT()
let valorInformado = prompt("Informe um valor inteiro");

/// @@@ CONVERSÃO DE DADOS EM JS
let valorConvertido = parseFloat(valorInformado);
//let valorConvertido = Number(valorInformado); //Outra forma de fazer a conversão

let valor2 = 10;
let resultado = valor2+valorConvertido;
alert(resultado);

/// @@@ FUNÇÕES MATEMÁTICAS EM JS
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let aleatorio = getRandomIntInclusive(1,3);
console.log(aleatorio);

/* @@@@ Dicas Mesa de Trabalho: Por onde começar a realizar a atividade ??
1 - Capturar a escolha de vocês (1, 2 ou 3)
    - Sugiro converter para inteiro e guardar em uma variável.
2 - Capturar a escolha da "máquina". 
    - Fazer isso, usando o Math.Random() com algum intervalo;
3 - Testar (Switch e IF) quem foi o ganhador/perdedor da rodada, ou se empatou.
4 - Guardar em variáveis separadas, quem ganhou cada rodada
5 - Ao final, verificar e declarar um campeão (melhor de 2 rodadas)
*/