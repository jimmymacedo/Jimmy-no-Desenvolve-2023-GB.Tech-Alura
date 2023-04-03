const cliente = {
    nome:   'Julio',
    idade:  36,
    cpf:    '12345678910',
    email:  'julio@email.com',
    fones:  [ 
        '9988779988', 
        '9988774455' 
    ]
}

cliente.dependentes = [
    {
        nome: 'Maria',
        parentesco: 'esposa',
        dataNasc: '20/10/1990'
    },
    {
        nome: 'Valentina',
        parentesco: 'filha',
        dataNasc: '20/10/2010'
    },
]

console.log(cliente)

cliente.dependentes[0].dataNasc = '30/10/1990'

console.log(cliente)