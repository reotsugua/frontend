const {gets, print} = require('./api');

const qtdItems = gets();
const arrayPar = []
const arrayImpar = []
for (let i = 0; i < qtdItems; i++) {
    let nums = gets()
    if (nums % 2 == 0 ) {
        arrayPar.push(nums);
        
    } else {
        arrayImpar.push(nums);
    }
}


arrayPar.sort((a,b) => a - b)
arrayImpar.sort((a,b) => a - b)

print(`Maior número par: ${arrayPar[arrayPar.length-1]}`)
print(`Menor número ímpar: ${arrayImpar[0]}`)

(function(){
    
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




