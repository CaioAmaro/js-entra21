Introdução ao JavaScript

Resumo dos principais conceitos da apresentação sobre JavaScript do Professor Henrique Delegrego.
1. História e Conceitos Fundamentais

    O que é? JavaScript é uma linguagem de programação fundamental para o desenvolvimento web, utilizada para adicionar interatividade e dinamismo às páginas HTML e CSS.

    História: Criado em 1995 por Brendan Eich (Netscape). Sua evolução foi impulsionada pelo surgimento de bibliotecas como jQuery, frameworks como Angular, React e Vue.js, e a criação do Node.js em 2009, que permitiu seu uso no back-end.

    Ecossistema: Possui um vasto ecossistema com ferramentas e bibliotecas, sendo uma das linguagens mais versáteis e utilizadas no mundo.

    Observação: Java e JavaScript não são a mesma coisa.

2. Sintaxe Básica
Operadores Aritméticos

    +: Soma

    -: Subtração

    *: Multiplicação

    /: Divisão

    %: Resto da divisão

Variáveis

    Tipagem: JavaScript é uma linguagem de tipagem fraca (ou dinâmica).

    let: Usada para declarar variáveis cujo valor pode ser alterado.

    let nome = "Maria";
    let idade = 25;

    const: Usada para declarar constantes, ou seja, valores que não serão alterados.

    const PI = 3.14159;

Comandos de Saída

    console.log(): Exibe uma mensagem no console de desenvolvedor do navegador.

    console.log("Olá, Mundo!");

    alert(): Exibe uma caixa de diálogo de alerta para o usuário.

    alert("Esta é uma mensagem importante!");

    prompt(): Exibe uma caixa de diálogo que solicita uma entrada do usuário.

    let nomeUsuario = prompt("Qual é o seu nome?");

    confirm(): Exibe uma caixa de diálogo de confirmação (OK/Cancelar).

    let aceitaTermos = confirm("Você aceita os termos de uso?");

3. Estruturas de Controle
Condicionais

A estrutura if/else permite executar blocos de código com base em uma condição.

    ==: Compara apenas o valor.

    ===: Compara o valor e o tipo.

let numero = 10;
let texto = "10";

if (numero == texto) {
  console.log("Verdadeiro, pois os valores são iguais."); // Executa
}

if (numero === texto) {
  console.log("Isso não será executado.");
} else {
  console.log("Falso, pois os tipos são diferentes (number vs string)."); // Executa
}

4. Estruturas de Dados
Objetos

Coleções de propriedades (pares chave-valor).

const carro = {
  marca: "Honda",
  modelo: "Civic",
  ano: 2010,
  cor: "Preto"
};

console.log(carro.marca); // Saída: Honda

Arrays (Vetores)

Listas ordenadas de valores. São dinâmicos e podem conter tipos de dados diferentes.

const linguagens = ["HTML", "CSS", "JavaScript"];

// Acessar um elemento
console.log(linguagens[2]); // Saída: JavaScript

// Adicionar no final
linguagens.push("PHP");

// Adicionar no início
linguagens.unshift("Python");

// Remover do final
let ultimo = linguagens.pop();

// Remover do início
let primeiro = linguagens.shift();

// Tamanho do array
console.log(linguagens.length);

5. Manipulação do DOM (Document Object Model)

O DOM é a representação da estrutura de uma página HTML que permite ao JavaScript modificar seu conteúdo, estrutura e estilo.
Selecionando Elementos

    document.getElementById('id-do-elemento'): Seleciona um único elemento pelo seu id.

    document.querySelector('seletor-css'): Seleciona o primeiro elemento que corresponde ao seletor CSS.

Modificando Elementos

    .innerHTML: Altera o conteúdo HTML de um elemento.

    .style: Altera o CSS inline de um elemento.

    .classList.add('nome-da-classe'): Adiciona uma classe CSS.

    .classList.remove('nome-da-classe'): Remove uma classe CSS.

Exemplo:

<p id="paragrafo">Texto original.</p>
<button onclick="mudarTexto()">Mudar Texto</button>
```javascript
function mudarTexto() {
  const p = document.getElementById('paragrafo');
  p.innerHTML = "Texto alterado pelo JavaScript!";
  p.style.color = "blue";
  p.style.fontWeight = "bold";
}

6. Formulários

O JavaScript é essencial para validar e processar dados de formulários no lado do cliente.
Acessando Valores

Para obter o valor de um campo de formulário, use a propriedade .value.

<label for="nome">Nome:</label>
<input type="text" id="nome">
<button onclick="validar()">Enviar</button>
```javascript
function validar() {
  const nomeInput = document.getElementById('nome');
  const nomeValor = nomeInput.value;

  if (nomeValor === "") {
    alert("Por favor, preencha o campo nome.");
  } else {
    alert(`Olá, ${nomeValor}!`);
  }
}

Tipos de Input Comuns

    Checkbox: Para múltiplas seleções.

    Radio: Para seleção única dentro de um grupo (name igual).

    Select: Para listas suspensas (dropdown).

    Textarea: Para textos longos.

    Datalist: Sugestão de preenchimento automático.
