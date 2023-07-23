const {gets, print} = require('./funcoesAuxiliares');

const array = [];

for (let i = 0; i < 5; i++) {
    array.push(gets())
}

array.sort((a,b) => a -b)

print(array)
print(array[array.length-1])

