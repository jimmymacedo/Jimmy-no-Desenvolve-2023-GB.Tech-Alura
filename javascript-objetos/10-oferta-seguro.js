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
        {
            nome: 'Enzo',
            parentesco: 'filho',
            dataNasc: '10/10/2000'
        },
    ],
    saldo: 0,
    depositar: function(valor) {
        this.saldo += valor
    },
    sacar: function(valor) {
        this.saldo -= valor
    },
    temDependentes: function() {
        return ( this.dependentes.length > 0 )
    },
}

function ofertaSeguro(cliente) {
    if (cliente.temDependentes()) 
        console.log(`Oferta de seguro de vida para ${cliente.nome} e seus dependentes.`)
    
}

ofertaSeguro(cliente)

console.log(Object.keys(cliente))
console.log(Object.values(cliente))
console.log(Object.entries(cliente))