//Abaixo temos um objeto criado com base em uma classe
class Produto {
    // O construtor da classe é chamado quando um novo objeto é criado com a palavra-chave "new"
    constructor(descricao, preco) {
        this.descricao = descricao
        this.preco = preco
    }
    // A classe tem um método chamado "verDescricao"
    verDescricao () {
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

// Um novo objeto é criado com a classe "Produto"
let produto = new Produto ('Notebook', 2200)

// O método "verDescricao" é chamado no objeto "produto"
produto.verDescricao()

//Abaixo temos um objeto literal
// Um objeto literal é criado diretamente atribuindo valores às suas propriedades
let produtoLiteral = {
    descricao: 'PC',
    preco: 3400,
    verDescricao: function () {
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

// O método "verDescricao" é chamado no objeto literal "produtoLiteral"
produtoLiteral.verDescricao()

// Objetos literais são frequentemente usados porque não é necessário criar uma classe se for um objeto único na aplicação. A criação de uma classe pode ser desnecessária e mais complexa para objetos simples e únicos.

//Resumo da aula:

/*
Nesta aula aprendemos sobre a criação de objetos em JavaScript. Vimos que existem duas maneiras principais de criar objetos: usando classes ou objetos literais.

Um objeto criado usando uma classe é uma instância da classe e é criado usando a palavra-chave "new". Na classe, podemos definir as propriedades e métodos do objeto usando o método construtor e a palavra-chave "this". Em seguida, podemos chamar os métodos do objeto criado usando o ponto e o nome do método.

Já um objeto literal é um objeto criado diretamente atribuindo valores às suas propriedades. As propriedades e métodos são definidos dentro das chaves do objeto literal e separados por vírgulas. Podemos chamar os métodos do objeto literal usando o ponto e o nome do método.

Vimos também que objetos literais são frequentemente usados para criar objetos simples e únicos na aplicação, sem a necessidade de criar uma classe. Por outro lado, se precisarmos criar vários objetos semelhantes, a criação de uma classe pode ser uma opção mais adequada.

Por fim, com o código fornecido, criamos um objeto usando uma classe chamada Produto e outro objeto usando um objeto literal. Em seguida, chamamos o método verDescricao em ambos os objetos para imprimir suas propriedades na tela.
*/