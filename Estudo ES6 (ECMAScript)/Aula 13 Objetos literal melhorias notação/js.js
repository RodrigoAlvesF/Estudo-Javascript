let nome = 'Jorge'
let idade = 29
let sexo = 'Masculino'
let profissao = 'Programador'

let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function () {
        console.log(`${this.nome} tem ${this.idade} anos, é do sexo ${this.sexo} e é ${this.profissao}`)
    }
}

console.log(objeto)
objeto.exibirResumo()

//Na versão do ES6, fica da seguinte forma:

let objeto2 = {
    //caso a varíavel tiver o mesmo nome da chave, podemos fazer assim:
    nome, idade, sexo, profissao, //ocultando a chave e indicando que recebe a varíavel que tem o mesmo nome
    exibirResumo() { //Também podemos remover o "function", já que o JS entende que isso é uma função por si só
        console.log(`${this.nome} tem ${this.idade} anos, é do sexo ${this.sexo} e é ${this.profissao}`)
    }
}

console.log(objeto2)
objeto2.exibirResumo()
