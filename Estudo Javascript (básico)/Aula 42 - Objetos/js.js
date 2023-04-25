/*
const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;

const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 55;
*///se fossemos criar 1000 pessoas teriamos que criar várias variáveis pra cada pessoa, nesse caso é melhor criar um objeto:


/*
//colchete é array, chave é objeto
const pessoa1 = {
    nome: 'Luiz', 
    sobrenome: 'Miranda',
    idade: '25'
};

const pessoa2 = {
    nome: 'Maria', 
    sobrenome: 'Oliveira',
    idade: '55'
};
*///Ainda assim temos que criar mil objetos pra cada pessoa, então vamos criar uma função que crie o objeto para nós

function criaPessoa(nome,sobrenome, idade) { //Isso se chama parametro
    return{ //Retorna um objeto (é uma função factory que cria objetos)
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    }
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25)//quando enviamos o valor para o parametro chamamos de argumento (argumento é o valor passado para o parametro)
const pessoa2 = criaPessoa('Maria', 'Olvieira', 55)
const pessoa3 = criaPessoa('João', 'Junior', 16)

console.log(pessoa1.nome, 'e', pessoa2.nome)
console.log(pessoa2.sobrenome)
console.log(pessoa3.idade, pessoa2.idade)