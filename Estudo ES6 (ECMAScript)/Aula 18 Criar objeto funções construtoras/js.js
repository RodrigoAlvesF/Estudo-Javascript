// Definição da função construtora do objeto Carro
let Carro = function() {
    // Atribuição da propriedade cor com o valor 'Amarelo'
    this.cor = 'Amarelo';
    // Atribuição da propriedade modelo com o valor 'Chevette'
    this.modelo = 'Chevette';
    // Atribuição da propriedade velocidadeAtual com o valor 0
    this.velocidadeAtual = 0;
    // Atribuição da propriedade velocidadeMaxima com o valor 180
    this.velocidadeMaxima = 180;

    // Definição do método acelerar
    this.acelerar = function() {
        // Recupera a velocidade atual através do método getVelocidadeAtual e adiciona 10 à velocidade
        let velocidade = this.getVelocidadeAtual() + 10;
        // Define a nova velocidade atual chamando o método setVelocidadeAtual
        this.setVelocidadeAtual(velocidade);
    }

    // Definição do método getVelocidadeAtual
    this.getVelocidadeAtual = function() {
        // Retorna o valor da propriedade velocidadeAtual
        return this.velocidadeAtual;
    }

    // Definição do método setVelocidadeAtual
    this.setVelocidadeAtual = function(velocidadeAtual) {
        // Atribui o valor passado como argumento à propriedade velocidadeAtual
        this.velocidadeAtual = velocidadeAtual;
    }
}

// Criação de uma instância do objeto Carro
let carro = new Carro();

// Exibe a velocidade atual do carro utilizando o método getVelocidadeAtual
console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`);

// Acelera o carro chamando o método acelerar
carro.acelerar();

// Exibe a nova velocidade atual do carro após a aceleração
console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`);
