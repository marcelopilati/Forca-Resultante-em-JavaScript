import input from 'readline-sync';

console.log("Calculo da Forca Resultante \n\n");

var massa = input.question("Insira o valor da massa: \n");
var aceleracao = input.question("Insira o valor da aceleracao: \n");

var forca = massa * aceleracao;

console.log("A forca resultante e: "+forca+"N");