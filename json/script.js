const objs = [
    {
        nome:"Renan",
        idade:30,
        detalheProfissao:{
         profissao:"Programador",
         empresa:"Empresa X"
        },
        estaTrabalhando:true,
        hobbies:["Programar", "Correr", "Ler"]
    },
    {
        nome:"João",
        idade: 25,
        detalheProfissao:{
         profissao:null,
         empresa:null
        },
        estaTrabalhando:false,
        hobbies:["Jogar", "Academia"]
    }
]

// Convertendo OBJ para JSON
const jsonData = JSON.stringify(objs)
console.log(jsonData)

// Converter JSON para OBJ
const objData = JSON.parse(jsonData)
console.log(objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})