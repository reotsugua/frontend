
function calcMedias() {
    const notas = [5, 7, 8, 2, 5, 8]
    let soma = 0 ;

    for (let index = 0; index < notas.length; index++) {
        const element =  notas[index];
        soma += element;
        
    }

    return  (soma/notas.length);
    
}

console.log(calcMedias())


