
function carregar() {
    const msg = document.querySelector('div#msg')
    const imagem = document.querySelector('img#imagem')
    const data = new Date()
    const hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    
    img(hora, imagem)
}

function img(horas, imagem) {
    if (horas >= 0 && horas < 12) {
        //Bom Dia
        document.body.style.background = '#DEE2E4'
        imagem.src = './images/manha.jpg'
    } else if (horas >= 12 && horas < 18){
        //Boa Tarde
        document.body.style.background = '#FBB733'
        imagem.src = './images/tarde.jpg'
    } else {
        //Boa Noite
        document.body.style.background = '#856AA1'
        imagem.src = './images/noite.jpg'
    }
}
