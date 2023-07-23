class Carro{
    marca;
    cor;
    consumo;

    constructor(marca, consumo){
        this.marca = marca;
        this.consumo = consumo;
    }

    calcGastoCombus(kms, preco){
    
        const litrosGasto = kms/this.consumo;
        const calcTotal = litrosGasto*preco;
        return calcTotal
    }
}

(function () {
    const focus = new Carro('focus', 12);
    
    console.log(focus.calcGastoCombus(70, 5))
})()