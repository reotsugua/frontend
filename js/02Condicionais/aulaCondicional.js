
const valorEtanol = 5.79;
const valorGasol = 6.66;
const gastoMedio = 10;
const distancia = 100;





function gastoCombus(preco) {
    const gastoTotal = (distancia / gastoMedio) * preco;
    return gastoTotal.toFixed(2);
}


const tipo = "gaoslina";

if (tipo === "etanol") {
    console.log(gastoCombus(valorEtanol));

} else {
    console.log(gastoCombus(valorGasol));
};

