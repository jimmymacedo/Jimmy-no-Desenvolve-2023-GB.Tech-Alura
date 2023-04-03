const cliente = {
    nome: 'Julio',
    idade: 30,
    cpf: '12345678910',
    email: 'julio@email.com'
}

const chaves = [
    'nome',
    'idade',
    'cpf',
    'email',
]

chaves.forEach(k=>console.log(`${k}: ${cliente[k]}`))