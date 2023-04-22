export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
}
console.log('auto2')
const validadores = {
    dataNascimento:input => validaDataNascimento(input),
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ""
    
    if ( !maiorQue18(dataRecebida) ) {
        mensagem = "Você deve ser maior que 18 para se cadastrar."
    }
    input.setCustomValidity(mensagem)
    console.log('valida3')
}

function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())
    return dataMais18 <= dataAtual
}