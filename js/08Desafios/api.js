const entradas = [2000, 250];
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