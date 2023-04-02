const listaDeChamada = [
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
// removendo Juliana e Ana e adicionando Rodrigo no lugar
listaDeChamada.splice(1,2,'Rodrigo')

// adicionando Jonas entre Rodrigo e Caio
listaDeChamada.splice(2,0,'Jonas')

console.log(`Lista de chamada: ${listaDeChamada}`)
