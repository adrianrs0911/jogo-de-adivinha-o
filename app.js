let numeroSecreto = gerarNumeroAleatorio();

let titulo = document.querySelector('h1');
titulo.innderHTML = 'jogo do numero secreto';

let paragrafo = document.querySelector('p');
paragrafo.innderHTML = 'escolha um numero de 1 a 10';

funcion exibirTextoNaTela() {
  let campo = document.query.Selector(tag);
  campo.innderHTML = texto;
}

exibirTextoNaTela('h1', 'jogo do numero secreto');
exibirTextoNaTela('p', 'escolha um numero de 1 a 10');

function verificarChute() {
  let chute = document.querySelector('input').value
  console.log('Botão foi clicado!');
}

funcion gerarNumeroAleatorio(){
  return parseInt(Math.ramdom() * 10 + 1);

}
