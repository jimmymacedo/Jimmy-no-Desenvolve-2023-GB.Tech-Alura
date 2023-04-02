const notas = [ 10, 7, 8, 5, 10 ]
let somaDasNotas = 0;

notas.forEach( nota => {
    somaDasNotas += nota
});

media = somaDasNotas / notas.length
console.log (media)