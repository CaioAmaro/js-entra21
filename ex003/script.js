/*
2)
Uma pessoa foi até uma casa de câmbio trocar dólares por reais. Para isto ela entregou um valor em dólares para o atendente. Calcule quantos reais o atendente deve devolver para a pessoa
*/

let valorDolares = prompt("Digite o valor em dólares: ");
let cotacaoDolar = 5.49;

let valorReais = valorDolares * cotacaoDolar;
alert("O valor em reais é: R$ " + valorReais.toFixed(2) + " (Cotação: R$ " + cotacaoDolar + " por dólar)");