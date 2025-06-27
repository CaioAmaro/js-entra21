/**
 * 5)
Dado dois números inteiros distintos descreva um algoritmo para informar o maior
valor entre eles.
 */

let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));

let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));         

if (numero1 > numero2) {
    alert("O maior número é: " + numero1);
}else if (numero2 > numero1) {
    alert("O maior número é: " + numero2);
}
else {
    alert("Os números são iguais.");
}
