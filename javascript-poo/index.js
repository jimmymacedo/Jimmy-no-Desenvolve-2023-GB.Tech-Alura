/**
 * Semana 11
 * Curso JavaScript - Programação Orientada a Objetos
 * Aula 03 Classes e Heranças 
 * Aula 04 Encapsulamento
 */ 
import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"

const novoUser = new User('Mariana', 'm@m.com', '2000-10-10')

console.log(novoUser.getInfos())

const novoAdmin = new Admin('Julio', 'j@j.com', '2000-10-10')

console.log(novoAdmin.nome)

novoAdmin.nome = 'James'

console.log(novoAdmin.nome)

novoAdmin.email = 'b@b.com'

console.log(novoAdmin.email)

novoAdmin.nascimento = '1980-10-30'

console.log(novoAdmin.nascimento)


novoAdmin.ativo = false