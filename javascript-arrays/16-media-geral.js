
const salas = [
    ['JavaScript', [7,8,8,7,10,6.5,4,10,7]],
    ['Java',       [6,5,8,7,5,6]],
    ['Pytnon',     [7,3.5,8,9.5]],
]

function media(numeros) {
    return numeros.reduce((a,b)=>a+b,0)/numeros.length
}

salas.forEach((sala) => {
    let nome = sala[0]
    let numeros = sala[1]
    console.log ( `Média da sala de ${nome}: ${media(numeros)}` )
});
