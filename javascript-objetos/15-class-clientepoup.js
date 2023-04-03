class Cliente {
    constructor(nome, cpf, email, saldo) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
        this.dependentes = []
    }

    depositar(valor) 
    {
        this.saldo += valor
    }

    sacar(valor) 
    {
        this.saldo -= valor
    }

    temDependentes() 
    {
        return ( this.dependentes.length > 0 )
    }

    addDependente(dependente) 
    {
        if (typeof(dependente) === 'object') {
            this.dependentes.push(dependente)
        }
    }

    exibirSaldo()
    {
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente {

    constructor(nome, cpf, email, saldo, saldoPoupanca) {
        super(nome, cpf, email, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor) 
    {
        this.saldoPoupanca += valor
    }

    sacarPoupanca(valor) 
    {
        this.saldoPoupanca -= valor
    }
    exibirSaldoPoupanca()
    {
        console.log(this.saldoPoupanca)
    }

}

function Dependente(nome, parentesco, dataNasc) 
{
    this.nome = nome
    this.parentesco = parentesco
    this.dataNasc = dataNasc
}


const julio = new ClientePoupanca(
    'Julio', 
    '22211133355', 
    'julio@email.com', 
    100,
    200
)

console.log(julio)

julio.depositarPoupanca(90)

console.log(julio)

julio.exibirSaldoPoupanca()

julio.exibirSaldo()
