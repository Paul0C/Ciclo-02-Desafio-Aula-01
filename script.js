var nome = prompt("Digite seu nome");
document.write("Seja Bem-vindo:"+nome+"<br>");
var numero = parseInt(prompt(nome+" digite um número"));
document.write("Você digitou um número:"+numero+"<br>");
var numero2 = 20;
var bool = (numero == numero2);
document.write("O retorno da comparação booleana é:"+bool+"<br>");
var soma = (numero+numero2);
document.write("A soma dos valores é:"+soma+"<br>");
var subtração = (numero-numero2);
document.write("A subtração dos valores é:"+subtração+"<br>");
var divisão = (numero%numero2);
document.write("O resto da divisão é de:"+divisão+"<br>");
var numero3 = parseInt(prompt(nome+" digite um número"));
var potencia = numero3 ** 2;
document.write("O quadrado do número digitado é:"+potencia);