const pessoa = {
    nome: String,
    idade: Number,

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}


pessoa.idade = 31;
pessoa.nome = 'renan'
pessoa.descrever();