console.log('hello world');
let x = 5;
let y = 10;
let soma = x + y;
let multiplicacao = x * y;

console.log('A soma de ${x} e ${y} é ${soma}');
console.log('A multiplicação de ${x} e ${y} é ${multiplicacao}');

alert('hello world'); 

let campo = prompt('Digite seu nome:');
let confirmar = confirm('você deseja excluir usuario?');

if(confirmar) {
    alert('Usuário excluído: ' + campo);
}
else { 
    alert('Usuário não excluído');
}


console.log('Seu nome é: ' + campo);
console.log('Confirmação: ' + confirmar);