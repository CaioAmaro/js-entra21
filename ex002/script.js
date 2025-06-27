/*
1)
Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D.
*/

let A = prompt("Digite o valor de A: ");
let B = prompt("Digite o valor de B: ");
let C = prompt("Digite o valor de C: ");
let D = prompt("Digite o valor de D: ");

let produtoAB = A * B;
let produtoCD = C * D;

let diferenca = produtoAB - produtoCD;

alert("A*B - C*D = " + diferenca);