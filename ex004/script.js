/*
3)
Crie um programa que pergunte ao usuário se ele deseja pedir uma pizza usando
confirm(). Se o usuário confirmar, solicite seu sabor de pizza favorito através de
prompt() e, em seguida, exiba uma mensagem de confirmação com alert()
 */

let desejaPedirPizza = confirm("Você deseja pedir uma pizza?");
if (desejaPedirPizza) {
    let saborPizza = prompt("Qual é o seu sabor de pizza favorito?");
    alert("Você pediu uma pizza de " + saborPizza + "!");
}
