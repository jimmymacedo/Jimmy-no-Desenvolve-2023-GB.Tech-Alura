const separaSalas = (quantSalas, nomes) => {
    var salas = []
    for (i = 0; i < quantSalas; i++) {
        iStart = nomes.length/quantSalas*i
        iEnd = nomes.length/quantSalas*(i+1)
        salas.push( nomes.slice(iStart, iEnd) )
    }
    return salas
}

const imprimeSalas = salas => {
    salas.forEach((sala, i) => {
        console.log (`Alunos da sala ${i+1}: ${sala}`)
    });
}
const nomes = [
    'João', 
    'Juliana',
    'Ana',
    'Caio',
    'Lara',
    'Marjorie',
    'Guilherme',
    'Aline',
    'Fabiana',
    'Andre',
    'Carlos',
    'Paulo',
    'Bia',
    'Vivian',
]

const salas = separaSalas(3, nomes)
imprimeSalas(salas)
