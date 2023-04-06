/**
 * Semana 11
 * Curso JavaScript - Programação Orientada a Objetos
 * Aula 03 Classes e Heranças 
 */ 



// function User(nome, email) {
//     this.nome = nome
//     this.email = email

//     this.exibirInfos = function () {
//         return `${this.nome}, ${this.email}`
//     }
// }

// const jimmy = new User('Jimmy', 'jimmy@email.com')

// console.log(jimmy.exibirInfos())


// function Admin(role) {
//     User.call(this, 'James', 'james@email.com')
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)

// const novoUser = new Admin('admin')

// console.log(novoUser)


const user = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },
    exibirInfos: function() {
        return this.nome
    }
    
}

const novoUser = Object.create(user)
novoUser.init('Jonas', 'jonas@email.com')
console.log(novoUser)

console.log(user.isPrototypeOf(novoUser))