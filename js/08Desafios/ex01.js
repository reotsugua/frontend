const {gets, print} = require('./api');


function aprovacao(media){
    if (media < 5) {
        return 'Reprovado'
    } else if (media >= 5 && media < 7) {
        return 'Recuperação'
    } else {
        return 'Aprovado'
    }
}


(function()
{
    const media = gets();
    print(aprovacao(media))

})()