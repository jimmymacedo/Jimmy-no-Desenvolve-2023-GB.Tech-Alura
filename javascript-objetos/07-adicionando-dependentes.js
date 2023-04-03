const cliente = {
    nome:   'Julio',
    idade:  36,
    cpf:    '12345678910',
    email:  'julio@email.com',
    fones:  [ 
        '9988779988', 
        '9988774455' 
    ],
    dependentes: [
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
}

cliente.dependentes.push({
    nome: 'Enzo',
    parentesco: 'filho',
    dataNasc: '10/10/2000'
})

const listaDependentesNomes = cliente.dependentes.map(d => d.nome)

console.log (listaDependentesNomes)

const dependentesEsposa = cliente.dependentes.filter(d => d.parentesco === "esposa")

console.log (dependentesEsposa)

