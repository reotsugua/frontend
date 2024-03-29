const nasc = document.querySelector('input#txano')
const smasc = document.querySelector('input#masc')
const resultado = document.querySelector('div#res')


function ismen(boolean) {
    
    if (boolean && maioridade(nasc) == 'criança') {
        return 11
    } else 
    if (boolean && maioridade(nasc) == 'criança') {
        return 11
    } else if (boolean && maioridade(nasc) == 'adolescente'){
        return 12
    } else if (boolean && maioridade(nasc) == 'adulto'){
        return 13
    } else if (boolean && maioridade(nasc) == 'idoso'){
        return 14
    } else if (!boolean && maioridade(nasc) == 'criança'){
        return 21
    } else if (!boolean && maioridade(nasc) == 'adolescente'){
        return 22
    } else if (!boolean && maioridade(nasc) == 'adulto'){
        return 23
    } else if (!boolean && maioridade(nasc) == 'idoso'){
        return 24
    } 
}


function verificar() {
    const oque = ismen(smasc.checked, maioridade(nasc))
    
    switch (oque) {
        case 11:
            resultado.innerHTML = `<p class="fs-5">
                É um menino
                </p>
                <img class="rounded-circle mx-auto object-fit-cover mt-3" src="images/menino.jpg">`
            break;
        case 12:
            resultado.innerHTML = `<p class="fs-5">
                É um garoto
                </p>
                <img class="rounded-circle mx-auto object-fit-cover mt-3" src="images/garoto.jpg">`
            break;
        case 13:
            resultado.innerHTML = `<p class="fs-5">
                É um homem
                </p>
                <img class="rounded-circle mx-auto object-fit-cover mt-3" src="images/homem.jpg">`
            break;
        case 14:
            resultado.innerHTML = `<p class="fs-5">
                É um Idoso
                </p>
                <img class="rounded-circle mx-auto object-fit-cover mt-3" src="images/idoso.jpg">`
            break;
        case 21:
            resultado.innerHTML = `<p class="fs-5">
                    É um menina
                    </p>
                    <img class="rounded-circle mx-auto object-fit-cover mt-3" src="images/menina.jpg">`
                break;
            case 22:
                resultado.innerHTML = `<p class="fs-5">
                    É um garoto
                    </p>
                    <img class="rounded-circle mx-auto object-fit-cover mt-3" src="images/garota.jpg">`
                break;
            case 23:
                resultado.innerHTML = `<p class="fs-5">
                    É um homem
                    </p>
                    <img class="rounded-circle mx-auto object-fit-cover mt-3" src="images/mulher.jpg">`
                break;
            case 24:
                resultado.innerHTML = `<p class="fs-5">
                    É um Idoso
                    </p>
                    <img class="rounded-circle mx-auto object-fit-cover mt-3" src="images/idosa.jpg">`
                break;
        default:
            console.log('deu ruim')
            break;
    }
}


function maioridade(anoNasc) {
    const data = new Date()
    const ano = data.getFullYear()
    const idade = parseInt(ano - anoNasc.value)
    let tipo;

    if (idade <= 12 ) {
        return tipo = 'criança';
    } else if (idade > 12 && idade < 18) {
        return tipo = 'adolescente';
    } else if (idade >= 18 && idade < 60) {
        return tipo = 'adulto';
    } else {
        return tipo = 'idoso';
    }
}

