export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
        input.parentElement.classList.add('input-container--invalido')
    }
}

const mensagensDeErro = {
    nome: {  
        valueMissing: 'O campo nome não pode estar vazio'
    },
    email: {  
        valueMissing: 'O campo email não pode estar vazio',
        typeMismatch: 'O email digitado não é valido',
    },
    senha: {
        valueMissing: 'O campo senha não pode estar vazio',
        patternMismatch: 'Entre 6 a 128 caracteres, contendo: ao menos 1 letra minúscula, 1 mauúscula, 1 número e um caractere especial',
    },
    dataNascimento: {
        valueMissing: 'O campo data de nascimento não pode estar vazio',
        customError: 'Você deve ser maior que 18 para se cadastrar.',
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const validadores = {
    dataNascimento:input => validaDataNascimento(input),
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    }) 

    return mensagem
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