const entradas = [5, 50, 10, 98, 23, 46, 98, 75, 0, 4, 55, 32];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(params) {
    console.log(params);
}

module.exports = {
    gets: gets,
    print: print
};