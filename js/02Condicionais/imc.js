const peso = 63;
const altura = 1.75;
const potenciaAltura = Math.pow(altura, 2);
const imc = peso / potenciaAltura;
console.log(imc.toFixed(2))


if (imc < 18.5) {
    console.log('abaixo do peso')
    
} else if (imc >= 18.5 && imc < 25) {
    console.log('peso normal')
    
} else if (imc >= 25 && imc < 30) {
    console.log('acima do peso')
    
} else if (imc >= 30 && imc < 40) {
    console.log('obeso')
    
} else {
    console.log('obesidade grave')
}