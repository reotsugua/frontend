function escrevNome(params) {
    return `Seu nome é ${params}`
}

function verificaMaioridade(params) {
    if (params >= 18) {
        return 'maior de idade'
    } else {
        return 'menor de idade'
    }
}

(function () {
    console.log(escrevNome('renan'))
    console.log(verificaMaioridade(31))
    
})()