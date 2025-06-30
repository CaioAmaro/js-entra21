
# 📘 Introdução ao JavaScript

> Resumo dos principais conceitos da apresentação sobre **JavaScript** do Professor **Henrique Delegrego**.

---

## 🧠 História e Conceitos Fundamentais

**O que é?**  
JavaScript é uma linguagem de programação fundamental para o desenvolvimento web, utilizada para adicionar **interatividade** e **dinamismo** às páginas HTML e CSS.

**História:**  
Criado em 1995 por **Brendan Eich** (Netscape). Evoluiu com o surgimento de bibliotecas como **jQuery**, frameworks como **Angular**, **React**, **Vue.js** e, em 2009, o **Node.js**, que permitiu seu uso no back-end.

**Ecossistema:**  
Possui um vasto ecossistema com ferramentas e bibliotecas, sendo uma das linguagens mais versáteis e utilizadas no mundo.

> ⚠️ **Observação:** Java e JavaScript não são a mesma coisa.

---

## 🧮 Sintaxe Básica – Operadores Aritméticos

- `+` Soma  
- `-` Subtração  
- `*` Multiplicação  
- `/` Divisão  
- `%` Resto da divisão  

---

## 📝 Variáveis

**Tipagem:**  
JavaScript possui **tipagem fraca (dinâmica)**.

```javascript
let nome = "Maria";
let idade = 25;

const PI = 3.14159;
```

- `let`: Declara variáveis que podem ser alteradas.  
- `const`: Declara constantes (não podem ser reatribuídas).

---

## 📤 Comandos de Saída

```javascript
console.log("Olá, Mundo!");       // Exibe no console
alert("Mensagem importante!");    // Alerta para o usuário
let nomeUsuario = prompt("Qual é o seu nome?");
let aceitaTermos = confirm("Você aceita os termos de uso?");
```

---

## 🔀 Estruturas de Controle – Condicionais

```javascript
let numero = 10;
let texto = "10";

if (numero == texto) {
  console.log("Verdadeiro - valores iguais");
}

if (numero === texto) {
  console.log("Isso não será executado");
} else {
  console.log("Falso - tipos diferentes");
}
```

- `==` Compara apenas o valor  
- `===` Compara valor **e tipo**

---

## 📦 Estruturas de Dados

### Objetos

```javascript
const carro = {
  marca: "Honda",
  modelo: "Civic",
  ano: 2010,
  cor: "Preto"
};

console.log(carro.marca); // Honda
```

### Arrays

```javascript
const linguagens = ["HTML", "CSS", "JavaScript"];

console.log(linguagens[2]);      // JavaScript
linguagens.push("PHP");          // Adiciona ao final
linguagens.unshift("Python");   // Adiciona ao início
let ultimo = linguagens.pop();  // Remove do final
let primeiro = linguagens.shift(); // Remove do início
console.log(linguagens.length); // Tamanho
```

---

## 🌐 Manipulação do DOM

O **DOM** representa a estrutura de uma página HTML. Com JavaScript, é possível **modificar** conteúdo, estrutura e estilo da página.

### Selecionando Elementos

```javascript
document.getElementById('id');
document.querySelector('seletor-css');
```

### Modificando Elementos

```javascript
element.innerHTML = "Novo conteúdo";
element.style.color = "blue";
element.classList.add("classe");
element.classList.remove("classe");
```

### Exemplo

```html
<p id="paragrafo">Texto original.</p>
<button onclick="mudarTexto()">Mudar Texto</button>

<script>
function mudarTexto() {
  const p = document.getElementById('paragrafo');
  p.innerHTML = "Texto alterado pelo JavaScript!";
  p.style.color = "blue";
  p.style.fontWeight = "bold";
}
</script>
```

---

## 🧾 Formulários

O JavaScript é essencial para **validar** e **processar dados** de formulários no lado do cliente.

### Acessando Valores

```html
<input type="text" id="nome" placeholder="Nome">
<button onclick="validar()">Enviar</button>

<script>
function validar() {
  const nomeInput = document.getElementById('nome');
  const nomeValor = nomeInput.value;

  if (nomeValor === "") {
    alert("Por favor, preencha o campo nome.");
  } else {
    alert(`Olá, ${nomeValor}!`);
  }
}
</script>
```

### Tipos Comuns de Inputs

- ✅ **Checkbox:** múltiplas seleções
- 🔘 **Radio:** seleção única (grupo com mesmo `name`)
- 🔽 **Select:** lista suspensa (dropdown)
- 📝 **Textarea:** textos longos
- 📋 **Datalist:** sugestões automáticas

---

## ✨ Conclusão

JavaScript é uma linguagem essencial para quem deseja trabalhar com desenvolvimento web. Seus recursos e vasta comunidade tornam o aprendizado recompensador para qualquer nível de programador.

---

👨‍🏫 **Apresentação por:** Henrique Delegrego  
📚 **Resumo elaborado por:** Caio Ítalo Lima Amaro  
