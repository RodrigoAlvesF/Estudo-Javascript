/*
class Cachorro {
    constructor(){
        this.cor = 'Branco e marrom'
        this.tamanho = 30
        this.orelhas = 'Grandes e caídas'
    }

    correr() {
        console.log('Correr')
    }

    dormir() {
        console.log('Dormir')
    }

    rosnar() {
        console.log('Rosnar')
    }
}

class Passaro {
    constructor(){
        this.cor = 'Branco e marrom'
        this.tamanho = 10
        this.bico = 'Curto'
    }

    voar() {
        console.log('Voar')
    }

    dormir() {
        console.log('Dormir')
    }
}

let cachorro = new Cachorro()
let passaro = new Passaro()

console.log(cachorro)
console.log(passaro)
*/

//Como temos atributos parecido em ambos (cor e tamanho) e métodos também (dormir), podemos usar o pilar de herança para atribuir o atributo para os dois atraves de uma classe que concentrará os atributos e métodos que são comuns entre os objetos, para fazer com que eles herdem esses atributos da terceira classe
//A super classe é a classe que tem metodos e atributos que são herdados por subclasses(neste caso, a subclasse é o objeto (cachorro e passaro))
//Veja abaixo como ficaria:

class Animal { //Essa é a classe pai/super classe
    constructor() {
        this.cor = ''
        this.tamanho = null
        this.peso = null
    }

    dormir() {
        console.log('Dormir')
    }
} 

class Cachorro extends Animal { //Interpretamos da seguinte forma, crie uma classe 'Cachorro' que herda os atributos da classe 'Animal'
    constructor() {
        super() //Ná próxima aula será explicado a utilidade do super()
        this.orelhas = 'Grandes e caídas'
    }

    correr() {
        console.log('Correr')
    }

    rosnar() {
        console.log('Rosnar')
    }
}

class Passaro extends Animal {
    constructor() {
        super()
        this.bico = 'Curto'
    }

    voar() {
        console.log('Voar')
    }
}

class Papagaio extends Passaro { //Quando extendemos uma classe que extende outra, acontece uma cascata, assim, o Passaro recebe atributos de Animal, e Papagio recebe atributor de Passaro e Animal
    constructor() {
        super()
        this.sabeFalar = true
    }

    falar() {
        console.log('Falar')
    }
}

let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio()


console.log(cachorro)
console.log(passaro)
console.log(papagaio)
papagaio.falar()
papagaio.dormir() //podemos acessar tudo que cada objeto tiver

//Resumo da aula:
/*
O código acima apresenta duas classes, Cachorro e Passaro, e cada uma delas tem seus próprios atributos e métodos.

No entanto, as classes compartilham alguns atributos e métodos em comum, como cor e dormir. Para evitar a repetição desnecessária de código, podemos usar o pilar de herança para criar uma classe pai, que contém os atributos e métodos comuns, para que as outras classes possam herdar esses atributos e métodos.

A classe pai é definida com o nome Animal. Dentro do construtor da classe, definimos os atributos cor, tamanho e peso como vazios ou nulos. Também definimos o método dormir que exibe a mensagem "Dormir".

Agora vamos olhar para a classe Cachorro. Para fazer essa classe herdar os atributos e métodos de Animal, devemos usar a palavra-chave extends e especificar o nome da classe pai. Dentro do construtor da classe, chamamos o método super() para chamar o construtor da classe pai e inicializar os atributos cor e tamanho.

Em seguida, definimos o atributo orelhas e os métodos correr e rosnar. Esses métodos são específicos da classe Cachorro e não foram definidos na classe Animal.

A classe Passaro é semelhante à classe Cachorro. Novamente, usamos a palavra-chave extends para herdar os atributos e métodos da classe Animal, e chamamos o método super() dentro do construtor para inicializar os atributos cor e tamanho.

Em seguida, definimos o atributo bico e o método voar, que são específicos da classe Passaro e não foram definidos na classe Animal.

Por fim, definimos uma nova classe chamada Papagaio, que herda os atributos e métodos de Passaro. Usamos a palavra-chave extends novamente e especificamos o nome da classe pai.

Dentro do construtor de Papagaio, chamamos o método super() para inicializar os atributos herdados de Passaro. Também definimos um novo atributo sabeFalar e um novo método falar, que são específicos de Papagaio e não foram definidos em outras classes.

Criamos instâncias de cada classe usando o operador new e as armazenamos em variáveis cachorro, passaro e papagaio.

Por fim, imprimimos essas instâncias no console usando console.log(). Além disso, chamamos o método falar() de papagaio e o método dormir() de todas as instâncias, demonstrando que todas as classes têm acesso aos métodos e atributos da classe pai Animal.
*/