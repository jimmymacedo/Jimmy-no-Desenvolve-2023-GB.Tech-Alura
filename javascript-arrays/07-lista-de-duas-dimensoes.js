const alunos = [
    'Guilherme',
    'Aline',
    'Fabiana',
    'Andre',
    'Carlos',
    'Paulo',
    'Bia',
    'Vivian',
]

const mediasDosAlunos = [
    10,
    5,
    9,
    4,
    8,
    6,
    8,
    1,
]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

const alunoIndex = 3

console.log(`${listaDeNotasEAlunos[0][alunoIndex]}, sua média é ${listaDeNotasEAlunos[1][alunoIndex]}`)