//Operador SUPER() dá acesso ao método constructor da classe pai

class Animal { //Essa é a classe pai/super classe
    constructor(cor, tamanho, peso) {
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }

    dormir() {
        console.log('Dormir')
    }
} 

//Onde tiver EXTENDS, deverá ter SUPER()
class Passaro extends Animal {
    constructor(bico, cor, tamanho, peso) {
        super(cor, tamanho, peso) //Caso quisessemos que todos os parametros dos passaros sejão iguais, faríamos toda a alteração nessa classe mesmo
        this.bico = bico
    }

    voar() {
        console.log('Voar')
    }
}

class Papagaio extends Passaro {
    constructor(sabeFalar, cor, tamanho, peso) {
        super('Médio', cor, tamanho, peso) //Com o operador SUPER() podemos acessar parametros como podem ver
        this.sabeFalar = sabeFalar
    }

    falar() {
        console.log('Falar')
    }
}

let papagaio = new Papagaio(true, 'Azul', 30, 400) //Podemos indicar tudo na criação da varíavel, sem que influencie em outras variáveis, como visto no outro papagaio abaixo
let papagaio2 = new Papagaio(false, 'Branco', 10, 80)

console.log (papagaio)
console.log (papagaio2)

//Resumo da aula:

/*
Esse código em JavaScript demonstra a utilização de classes e herança na linguagem. Vamos explicar passo a passo o que foi feito.

Primeiramente, temos a definição da classe Animal, que é a classe pai, ou superclasse. Ela possui um construtor que recebe três parâmetros: cor, tamanho e peso. Esses parâmetros são utilizados para inicializar as propriedades cor, tamanho e peso do objeto que será criado a partir dessa classe. Além disso, a classe possui um método dormir.

Em seguida, temos a definição da classe Passaro, que é uma subclasse de Animal. Essa classe também possui um construtor, que recebe quatro parâmetros: bico, cor, tamanho e peso. Ao utilizar o operador super dentro do construtor, temos acesso ao construtor da classe pai e passamos os três últimos parâmetros para inicializar as propriedades da superclasse. Além disso, a classe Passaro possui um método voar.

Por fim, temos a definição da classe Papagaio, que é uma subclasse de Passaro. Essa classe também possui um construtor, que recebe quatro parâmetros: sabeFalar, cor, tamanho e peso. Ao utilizar o operador super dentro do construtor, passamos os valores "Médio", cor, tamanho e peso para inicializar as propriedades da superclasse Passaro. Além disso, a classe Papagaio possui um método falar.

Por fim, o código cria duas instâncias da classe Papagaio utilizando diferentes valores para os parâmetros. Essas instâncias são armazenadas nas variáveis papagaio e papagaio2, respectivamente. Em seguida, o código imprime o valor dessas variáveis no console.
*/