/**
 * Semana 11
 * Curso JavaScript - Programação Orientada a Objetos
 * Aula 03 Classes e Heranças 
 */ 


const user = {
    nome: 'Jimmy',
    email: 'jimmy@email.com',
    nascimento: '1990/10/10',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Email: ${this.email}`)
        console.log(`Nascimento: ${this.nascimento}`)
        console.log(`Role: ${this.role}`)
        console.log(`Ativo? ${ this.ativo ? 'Sim' : 'Não' }`)
    }
}

const admin = {
    nome: 'Mariana',
    email: 'mariana@email.com',
    nascimento: '1990/10/10',
    role: 'admin',
    ativo: true,
    criarCurso: function() {
        console.log(`- Curso Criado -`)
    }
}

Object.setPrototypeOf(admin, user)

admin.criarCurso()
admin.exibirInfos()