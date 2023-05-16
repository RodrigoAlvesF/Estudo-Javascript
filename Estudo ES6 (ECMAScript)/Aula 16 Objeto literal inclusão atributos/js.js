let pessoa = {
    nome: 'Maria',
    idade: 25
}

console.log(pessoa)

//para incluir valor fazemos assim:

pessoa.sexo = 'Feminino'

console.log(pessoa)

//A mesma coisa vale para funções

//pessoa.falarOi = () => console.log('Olá, tudo bem?')
//Acima usamos a arrow function, também podemos fazer assim:

pessoa.falarOi = function () {
    console.log("Olá, tudo bem?")

}
pessoa.falarOi()