// expressão de função


const soma = function(num1, num2) { return num1 + num2 } 
const multiplica = function(num1, num2) { return num1 * num2 } 

console.log(soma(3,2));
console.log(multiplica(3,2));
console.log(apresentar());
console.log(apresentar2());

function apresentar() {
    return "olá";
}

const apresentar2 = function() { return 'olá' }