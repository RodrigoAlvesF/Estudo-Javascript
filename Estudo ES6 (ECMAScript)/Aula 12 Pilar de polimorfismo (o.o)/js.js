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
