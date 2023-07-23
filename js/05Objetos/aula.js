class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - this.idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

function compararPessoas(p1,p2) {
    
    if (p1.idade > p2.idade) {
        return `${p1.nome} é mais velho que ${p2.nome}`
    } 
    return `${p2.nome} é mais velho que ${p1.nome}`
}

(function(){
    const re = new Pessoa('renan', 31);
    const mi = new Pessoa('millena', 22);



    console.log(compararPessoas(re, mi));
})()