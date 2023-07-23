class Pessoa {
    nome;
    peso;
    altura;


    constructor(nome, peso, altura ){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc(){
        return (this.peso / Math.pow(this.altura, 2)).toFixed(2);
    }

    classificarImc(){
        const imc = this.imc();

        if (imc < 18.5) {
            return 'abaixo do peso'
            
        } else if (imc >= 18.5 && imc < 25) {
            return 'peso normal'
            
        } else if (imc >= 25 && imc < 30) {
            return 'acima do peso'
            
        } else if (imc >= 30 && imc < 40) {
            return 'obeso'
            
        } else {
            return 'obesidade grave'
        }
    }

}

//  function imc(Pessoa){
//      return (Pessoa.peso / Math.pow(Pessoa.altura, 2)).toFixed(2);
//  }

(function(){
    const pessoa = new Pessoa('jose', 63, 1.75)
    //console.log(imc(pessoa));

    console.log(pessoa.imc());
    console.log(pessoa.classificarImc())

})()