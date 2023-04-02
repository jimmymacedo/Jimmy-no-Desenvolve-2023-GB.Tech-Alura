const notas = [ 8.5, 7, 8, 5, 10 ]

const notasAtualizadas = notas.map( 
    nota => 
    nota+1 >= 10 ? 
        10 : 
        ++nota 
)

console.log (notasAtualizadas)