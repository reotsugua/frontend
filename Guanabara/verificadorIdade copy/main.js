function verificar() {
    const nasc = document.querySelector('input#txano')
    const data = new Date();
    const ano = data.getFullYear();
    
    
    if (nasc.value == '' || Number(nasc.value) > ano) {
        window.alert('Preeencha o ano corretamente')
    } else {
        const resultado = document.querySelector('div#res')
        const sexoMasc = document.querySelector('input#masc')
        const idade = ano - Number(nasc.value)
        const img = document.createElement('img')
        const genero = (sexoMasc.checked) ? 'homem' : 'mulher';
        img.setAttribute('id', 'foto')
        img.setAttribute('class', 'rounded-circle mx-auto object-fit-cover mt-3')
        resultado.setAttribute('class', 'text-center')
        
        if (sexoMasc.checked) {
            if (idade <= 12 ) {
                img.setAttribute('src', 'images/menino.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', 'images/garoto.jpg')
            } else if (idade <= 60) {
                img.setAttribute('src', 'images/homem.jpg')
            } else {
                img.setAttribute('src', 'images/idoso.jpg')
            }
        } else {
            if (idade <= 12 ) {
                img.setAttribute('src', 'images/menina.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', 'images/garota.jpg')
            } else if (idade <= 60) {
                img.setAttribute('src', 'images/mulher.jpg')
            } else {
                img.setAttribute('src', 'images/idosa.jpg')
            }
        }
        resultado.innerHTML = `<p class="fs-5">
            Detectamos ${genero}, com ${idade} anos
            </p>
        `
        resultado.appendChild(img)
    }

    
    
    
}
