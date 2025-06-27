/*
4)
Faça uma pesquisa de satisfação utilizando confirm(). Pergunte ao usuário se ele está
satisfeito com o serviço ou produto. Com base na resposta, exiba uma mensagem de
agradecimento com alert() ou peça feedback adicional com prompt() */

let satisfeito = confirm("Você está satisfeito com o nosso serviço/produto?");

if (satisfeito) {
    alert("Obrigado pelo seu feedback positivo!");
}else {
    let feedback = prompt("Por favor, nos diga como podemos melhorar:");
    alert("Agradecemos seu feedback: " + feedback);
}