let numSorteados = [];
let qtdLimite = 10;

function exibirNaTela(tag,texto){
  let campo = document.querySelector(tag).innerHTML = texto;
  /* responsiveVoice.speak(texto,'Brazialian Portuguese Female',{rate:1,2}); */
}
function gerarNumSecreto(){
  let numerosEscolhidos = parseInt(Math.random() * qtdLimite + 1);
  let totalNumSorteados = numSorteados.length;
  
  if(totalNumSorteados == qtdLimite){
    numSorteados = [];
  }
  
  if(numSorteados.includes(numerosEscolhidos)){
    return gerarNumSecreto();
  }else{
    numSorteados.push(numerosEscolhidos);
    console.log(numSorteados);
    return numerosEscolhidos;
  }
}
function palTentativa(){
  return tentativas > 1 ? 'tentativas' : 'tentativa';
}
function limparCampo(){
  let limpar = document.querySelector('input').value = '';
}
function ativarNovoJogo(){
  let ativar = document.getElementById('reiniciar');
  ativar.removeAttribute('disabled');
}
function inicio(){
exibirNaTela('h1','Jogo do número secreto');
exibirNaTela('p','Digite um número entre 1 e 10');
}

inicio();
let numSecreto = gerarNumSecreto();
let tentativas = 1;
let palavraTentativa = palTentativa();
//alert(numSecreto);

function verificarChute(){
  let chute = document.querySelector('input').value;
  
  if(chute == numSecreto){
      exibirNaTela('h1','Acertou!');
      exibirNaTela('p','Você acertou com ' +tentativas +' '+ palavraTentativa);
      ativarNovoJogo();
  }else{
    if(chute > numSecreto){
      exibirNaTela('p','O número secreto é menor que ' +chute);
    }else{
      exibirNaTela('p','O número secreto é maior que ' +chute);      
    }
  }
  limparCampo();
  tentativas++;
}

function novoJogo(){
  tentativas = 1;
  numSecreto = gerarNumSecreto();
  inicio();
  let novoJogo = document.getElementById('reiniciar').setAttribute('disabled',true);
}

/*
Exercicio sobre lista
let listaGenerica = [];
let linguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];

linguagensDeProgramacao.push('Java','Ruby','GoLang');

console.log(linguagensDeProgramacao[1]);
*/