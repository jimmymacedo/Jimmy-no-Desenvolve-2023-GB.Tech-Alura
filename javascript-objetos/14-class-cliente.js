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

function Dependente(nome, parentesco, dataNasc) 
{
    this.nome = nome
    this.parentesco = parentesco
    this.dataNasc = dataNasc
}


const julio = new Cliente(
    'Julio', 
    '22211133355', 
    'julio@email.com', 
    0
)

console.log(julio)

julio.depositar(90)

console.log(julio)

julio.exibirSaldo()
