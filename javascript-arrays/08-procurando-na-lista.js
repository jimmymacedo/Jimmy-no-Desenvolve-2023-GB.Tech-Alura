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

const exibeNomeNota = (nomeDoAluno) => {

    if ( listaDeNotasEAlunos[0].includes(nomeDoAluno) ) {

        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        nome = listaDeNotasEAlunos[0][indice]
        media = listaDeNotasEAlunos[1][indice]
        return `A média de ${nome} é ${media}`

    } else {

        return `Aluno ${nomeDoAluno} não localizado`
        
    }

}
// testando um aluno válido
console.log(exibeNomeNota('Vivian'))

// testando um aluno inválido
console.log(exibeNomeNota('Jimmy'))