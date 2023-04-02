const notas = [ 10, 7, 8, 5, 10 ]

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i]
    somaDasNotas += nota
}

media = somaDasNotas / notas.length

console.log (media)