const {gets, print} = require('./funcoesAuxiliares');

const array = [];

for (let i = 0; i < 100 ; i++) {
    array.push(gets())
    if (array[i] == undefined) {
        array.pop()
        break
    }
}

array.sort((a,b) => a -b)

print(array)
print(array[array.length-1])

