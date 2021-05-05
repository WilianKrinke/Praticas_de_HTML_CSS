onload = () => {
  const $display = document.querySelector('.display')
  $display.value = 0
  document.querySelector('.um').onclick = () => digito(1);
  document.querySelector('.dois').onclick = () => digito(2);
  document.querySelector('.tres').onclick = () => digito(3);
  document.querySelector('.quatro').onclick = () => digito(4);
  document.querySelector('.cinco').onclick = () => digito(5);
  document.querySelector('.seis').onclick = () => digito(6);
  document.querySelector('.sete').onclick = () => digito(7);
  document.querySelector('.oito').onclick = () => digito(8);
  document.querySelector('.nove').onclick = () => digito(9);
  document.querySelector('.zero').onclick = () => digito(0);  

  document.querySelector('.virgula').onclick = virgula;
  document.querySelector('.AC').onclick = allClear;

  document.querySelector('.vezes').onclick = () => operador('*');
  document.querySelector('.dividir').onclick = () => operador('/');
  document.querySelector('.mais').onclick = () => operador('+');
  document.querySelector('.menos').onclick = () => operador('-');
  document.querySelector('.porcentagem').onclick = () => operador('%');
  document.querySelector('.igual').onclick = calcula;
}

//Aramzenamento de valores do teclado o operador e o estado da calculadora
let sValor = '0'
let ehNumeroNovo = true //Indica se tem valor novo no numero
let valorAnterior = 0 // Valor acumulado para outra operação
let operacaoPendente = null; // Operação 

const atualizarDisplay = () => {
  let [parteInteira,parteDecimal] = sValor.split(',');
  if (parteInteira.length > 10) {
    document.querySelector('.display').value = 'Error';
    return
  }
  let v = '';
  let zero = 0
  for (let i = parteInteira.length - 1; i >= 0; i--) {
    if (++zero > 3) {
      v = '.' + v;
      zero = 1
    }
    v = parteInteira[i] + v;    
  }
  v = v + (parteDecimal ? ',' + parteDecimal.substr(0,10 - v.length) : '')
  const $display = document.querySelector('.display')
  $display.value = v
}

const digito = (n) => {
  //função de click no botão de digito
  if(ehNumeroNovo){
    sValor = '' + n;
    ehNumeroNovo = false;
  } else {
    sValor += n;
  }
  atualizarDisplay()
}

//Ponto decimal
const virgula = () => {
  if (ehNumeroNovo) {
    sValor = '0,';
    ehNumeroNovo = false
  } else {
    if(sValor.indexOf(',') == -1){
      sValor += ',';
    }
    atualizarDisplay()
  }
}

const allClear = () => {
  ehNumeroNovo = true;
  valorAnterior = 0;
  sValor = '0';
  operacaoPendente = null;
  
  atualizarDisplay()
}

const valorAtual = () => parseFloat(sValor.replace(',','.'));

const operador = (sinal) => {
  calcula()
  //nova operação
  valorAnterior = valorAtual();
  operacaoPendente = sinal;
  ehNumeroNovo = true;
}

const calcula = () => {
  if (operacaoPendente != null) {
    let resultado;
    switch (operacaoPendente) {
      case '+':
        resultado = valorAnterior + valorAtual()
        break;
      case '-':
        resultado = valorAnterior - valorAtual()
        break;
      case '*':
        resultado = valorAnterior * valorAtual()
        break;
      case '/':
        resultado = valorAnterior / valorAtual()
        break;
      case '%':
        resultado = valorAtual() / 100;
        break;  
      default:
        break;
    }
    sValor = resultado.toString().replace('.',',');
  }
  ehNumeroNovo = true;
  operacaoPendente = null;
  valorAnterior = 0;
  atualizarDisplay()
}