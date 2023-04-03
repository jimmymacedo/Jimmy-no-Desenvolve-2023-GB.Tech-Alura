const clientes = [
    {
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
    },
    {
        nome:   'Claudia',
        idade:  30,
        cpf:    '12345678910',
        email:  'claudia@email.com',
        fones:  [ 
            '9988774455' 
        ],
        dependentes: [
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
]

// usando espalhamento ...
// const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

// usando concat
let listaDependentes = []

clientes.forEach( cliente => {
    console.log(cliente.dependentes)
    listaDependentes = listaDependentes.concat(cliente.dependentes)
})

console.table(listaDependentes)