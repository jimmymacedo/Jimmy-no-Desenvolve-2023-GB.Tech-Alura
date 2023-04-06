/**
 * Semana 11
 * Curso JavaScript - Programação Orientada a Objetos
 * Aula 03 Classes e Heranças 
 * Aula 04 Encapsulamento
 */ 
export default class User {

    #nome
    #email
    #nascimento
    #role
    #ativo

    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    getInfos() {
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo} `
    }

    get nome() {
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error('formato inválido')
        }
        this.#nome = novoNome
    }

    set email(novoEmail) {
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regexEmail.test(novoEmail)) {
            throw new Error('formato de email inválido')
        }
        this.#email = novoEmail
    }

    set nascimento(novoNascimento) {
        const regexData = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
        if (!regexData.test(novoNascimento)) {
            throw new Error('formato de data inválido')
        }
        this.#nascimento = novoNascimento
    }

    set ativo(novoAtivo) {
        if (typeof novoAtivo != "boolean") {
            throw new Error('formato inválido')
        }
        this.#ativo = novoAtivo
    }

}