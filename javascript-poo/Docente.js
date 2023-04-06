/**
 * Semana 11
 * Curso JavaScript - Programação Orientada a Objetos
 * Aula 03 Classes e Heranças 
 */ 
import User from "./User.js"

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} aprovado no curso ${curso}`
    }
}


const novoDocente = new Docente('Rodrigo', 'r@r.com', '2000-10-10')
