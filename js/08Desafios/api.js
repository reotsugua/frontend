const entradas = [5, 3, 4, 1, 10, 8];
let i = 0;

function gets() {
    const entrada = entradas[i];
    i++;
    return entrada;
}

function print(params) {
    console.log(params);
}

module.exports = {
    gets: gets,
    print: print
};