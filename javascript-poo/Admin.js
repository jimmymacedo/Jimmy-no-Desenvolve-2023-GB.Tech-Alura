/**
 * Semana 11
 * Curso JavaScript - Programação Orientada a Objetos
 * Aula 03 Classes e Heranças 
 */ 
import User from "./User.js";

export default class Admin extends User {

    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(curso, vagas) {
        return `Curso "${curso}" criado. ${vagas} vagas disponibilizadas.`
    }

}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2000-10-10')

