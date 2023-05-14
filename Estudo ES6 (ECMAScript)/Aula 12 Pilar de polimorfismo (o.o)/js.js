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
        super('Médio', cor, tamanho, peso)
        this.sabeFalar = sabeFalar
    }

    falar() {
        console.log('Falar')
    }
}

class Avestruz extends Passaro {
    constructor() {
        super('Grande', 'Branco e preto', 250, 15000)

    }

    enterrarCabeça () {
        console.log('Enterra a cabeça')
    }

    voar() { //Assim que excluimos alguma caracteristica com polimorfismo
        return false
        //podemos usar também um console.log('Não sabe voar'), porém ao usarmos return false simplesmente apaga a caracterisca
    }
}

let papagaio = new Papagaio(true, 'Azul', 30, 400)
console.log (papagaio)

papagaio.voar()

let avestruz = new Avestruz()
avestruz.enterrarCabeça()
avestruz.voar()

//Resumo da aula:

/*


Neste código, estamos utilizando o conceito de herança e polimorfismo em classes. Primeiro, temos a classe "Animal" que é a classe pai/superclasse, contendo o construtor com os atributos de cor, tamanho e peso, e um método "dormir". 

Em seguida, temos a classe "Passaro" que herda os atributos e métodos da classe Animal, utilizando o operador "extends". A classe "Passaro" também possui o seu próprio construtor, com um novo atributo "bico" e um método "voar".

A classe "Papagaio" é uma classe filha de "Passaro", que herda os atributos e métodos da classe "Passaro". "Papagaio" também possui seu próprio construtor, com um novo atributo "sabeFalar" e um método "falar".

Por fim, temos a classe "Avestruz" também filha de "Passaro", que herda seus atributos e métodos. "Avestruz" tem um construtor sem parâmetros, com valores pré-definidos para o "bico", cor, tamanho e peso. "Avestruz" também possui um método "enterrarCabeça" e um método "voar", que foi sobreposto com um valor "false", indicando que as avestruzes não voam.

No final, são criados objetos das classes "Papagaio" e "Avestruz" e alguns métodos são chamados para mostrar o comportamento desses objetos.
*/