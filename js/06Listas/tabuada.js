

function tabuada (num){

    for (let i = 0; i < 11; i++) {
        let resultado = num * i
        console.log(`${num} x ${i} = ${resultado}`)
    }
}

tabuada(9);