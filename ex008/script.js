/**
 * 7)
Crie um cadastro de pessoas utilizando objetos. O programa deve perguntar ao
usuário, usando confirm(), se ele deseja inserir uma nova pessoa, enquanto o usuário
aceitar:

 * Solicite as informações básicas dessa pessoa usando prompt() e coloque em um
objeto.
Exiba esse objeto no console usando console.log().
Quando o usuário negar o confirm(), o programa deve ser encerrado.
 */

const pessoas = [];

alert("Bem-vindo ao cadastro de pessoas!");
while (confirm("Você deseja inserir uma nova pessoa?")) {
    const nome = prompt("Digite o nome da pessoa:");
    const idade = prompt("Digite a idade da pessoa:");
    const email = prompt("Digite o e-mail da pessoa:");

    const pessoa = {
        nome: nome,
        idade: idade,
        email: email
    };

    pessoas.push(pessoa);
    console.log("Pessoa cadastrada:", pessoa);
}

alert("Cadastro encerrado. Total de pessoas cadastradas: " + pessoas.length);
console.log("Todas as pessoas cadastradas:", pessoas);
