
async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPJson = await consultaCEP.json()
        if (consultaCEPJson.erro) {
            throw Error("CEP inexistente")
        } 
        var cidade = document.getElementById('cidade')
        var endereco = document.getElementById('endereco')
        var estado = document.getElementById('estado')
        var numero = document.getElementById('numero')
        var bairro = document.getElementById('bairro')
        
        cidade.value = consultaCEPJson.localidade
        endereco.value = consultaCEPJson.logradouro
        estado.value = consultaCEPJson.uf
        bairro.value = consultaCEPJson.bairro

        numero.focus()

        return consultaCEPJson

    } catch (erro) {
        mensagemErro.innerHTML = `<p> CEP Inválido, tente novamente. </p>`
        return false
    }

    
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value))

