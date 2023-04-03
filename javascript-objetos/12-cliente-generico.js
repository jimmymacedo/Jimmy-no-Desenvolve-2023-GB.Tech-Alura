function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.dependentes = []
    this.depositar = function(valor) {
        this.saldo += valor
    },
    this.sacar = function(valor) {
        this.saldo -= valor
    },
    this.temDependentes = function() {
        return ( this.dependentes.length > 0 )
    },
    this.addDependente = function(dependente) {
        if (typeof(dependente) === 'object') {
            this.dependentes.push(dependente)
        }
    }
}

function Dependente(nome, parentesco, dataNasc) {
    this.nome = nome
    this.parentesco = parentesco
    this.dataNasc = dataNasc
}
const clienteJonas = new Cliente(
    'Jonas', 
    '00002222555588', 
    'jonas@email.com',
    0,
)

clienteJonas.addDependente(new Dependente(
    'Enzo', 
    'filho', 
    '10/10/2010'
))

console.log(clienteJonas)