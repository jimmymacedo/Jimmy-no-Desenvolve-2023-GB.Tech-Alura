// Tipos de Texto

const texto1 = "Hello Word"
const texto2 = 'Hello Word'

// entendnendo as aspas simples e aspas duplas
const citacao = 'O Leo disse "Oi!"' 
const citacao2 = "O Leo disse 'Oi!'"

// concatenação (+)

const frase = "Meu nome é"
const nome = "Jimmy"


console.log(frase + " " + nome)


const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres
