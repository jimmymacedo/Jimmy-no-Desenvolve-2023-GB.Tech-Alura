const nomes = [
    'Guilherme',
    'Aline',
    'Fabiana',
    'Andre',
    'Carlos',
    'Paulo',
    'Bia',
    'Vivian',
]

const notas = [
    10,
    5,
    9,
    4,
    8,
    6,
    8,
    1,
]

const media = 7

const reprovados = nomes.filter( (aluno, i) => notas[i] < media)

console.log(`Alunos reprovados: ${reprovados}`)