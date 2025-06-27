/**
 * 6)
Dado dois valores inteiros, escreva um algoritmo que informe se eles são múltiplos ou
não.
 */

let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));

let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

if(numero1 % numero2 === 0){
    alert(numero1 + " é múltiplo de " + numero2);
}

