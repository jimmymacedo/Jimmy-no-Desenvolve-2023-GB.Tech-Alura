const cliente = {
    nome: 'Julio',
    idade: 30,
    cpf: '12345678910',
    email: 'julio@email.com'
}

console.log(`Nome do cliente: ${cliente.nome}`)
console.log(`Idade: ${cliente.idade}`)

console.log(`3 primeiros numeros do CPF: ${cliente.cpf.substring(0,3)}`)
console.log(cliente.email)