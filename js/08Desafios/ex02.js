const {gets, print} = require('./api');


function verificaNum (comprimento, array1, array2){
    for (let i = 0; i < comprimento; i++) {
        let numero = gets()
        if (numero % 2 == 0 ) {
            array2.push(numero);
            
        } else {
            array1.push(numero);
        }
    }
    
}
function menorImpar (array1){
    array1.sort((a,b) => a - b)
    return array1[0];
}
function maiorPar (array2){
    array2.sort((a,b) => a - b)
    return array2[array2.length-1];
}

(function(){
    const qtdItems = gets();
    const arrayPar = []
    const arrayImpar = []
    
    verificaNum(qtdItems, arrayImpar, arrayPar)

    print(`Maior número par: ${maiorPar(arrayPar)}`)
    print(`Menor número ímpar: ${menorImpar(arrayImpar)}`)
})()

/*let maiorPar = 0;
let maiorImpar = 0;

for (let i = 0; i < qtdItems; i++) {
    let nums = gets()
    if (nums % 2 == 0 ) {
        if (nums > maiorPar) {
            maiorPar = nums;
        }
        
    } else {
        if (nums < maiorImpar) {
            maiorImpar = nums;
        }
    }
}
print(maiorPar)
print(maiorImpar)

*/




