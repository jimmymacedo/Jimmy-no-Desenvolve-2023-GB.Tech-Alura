function Cliente(nome, cpf, email, saldo) 
{
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
function Dependente(nome, parentesco, dataNasc) 
{
    this.nome = nome
    this.parentesco = parentesco
    this.dataNasc = dataNasc
    
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) 
{
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor
}

ClientePoupanca.prototype.sacarPoup = function(valor) {
    this.saldoPoup -= valor
}

const clientePoupJulio = new ClientePoupanca(
    'Julio', 
    '33355544488899', 
    'julio@email.com', 
    0, 
    10
)
console.log (clientePoupJulio)

clientePoupJulio.depositarPoup(30)

console.log (clientePoupJulio)

clientePoupJulio.sacarPoup(20)

console.log (clientePoupJulio)
