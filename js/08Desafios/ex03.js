const {gets, print} = require('./api');

const salBruto = gets();
const beneficios = gets();


function desconto (num){
    switch (num) {
        case 1:
            return 0.05;
       
        case 2:
            return  0.1;
        
        case 3:
            return  0.15;
        
        default:
            return ;
    }

}

function salarioTotal (salBruto, beneficios){
    let salLiquido;
    let salTotal;

    if (salBruto > 0 && salBruto <= 1100) {
        salLiquido = salBruto - (salBruto * desconto(1))
        salTotal = salLiquido + beneficios;
    } else if (salBruto > 1100 && salBruto <= 2500){
        salLiquido =  salBruto - (salBruto * desconto(2))
        salTotal = salLiquido + beneficios;
    } else {
        salLiquido = salBruto - (salBruto * desconto(3))
        salTotal = salLiquido + beneficios;
    }

    return salTotal;

}



print(salBruto)
print(beneficios)
console.log('Salario a transferir: ')
print(salarioTotal(salBruto, beneficios))