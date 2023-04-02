function soma (num1 = 0, num2 = 0) {
    return num1 + num2;
}
console.log(soma(10, 20));


function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e tenho ${idade} anos`;
}
console.log(nomeIdade('Jimmy', 33));

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;
}


console.log( 
    multiplica(
        soma(2,2), 
        soma(3,3)
    ) 
);