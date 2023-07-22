function calcDesconto(condPagamento, precoEtiqueta){


    switch (condPagamento) {
        case 'debito':
          return precoEtiqueta - (precoEtiqueta * 0.1);
          
        case 'pix':
            return precoEtiqueta - (precoEtiqueta * 0.15);
            
        case 'duas':
            return precoEtiqueta;
            
        default:
            return precoEtiqueta + (precoEtiqueta * 0.1);
            
    }
    
}

function imprimir(funcao){
    console.log(funcao);
}


function main(){

    imprimir(calcDesconto('duas', 100));

}

main();
