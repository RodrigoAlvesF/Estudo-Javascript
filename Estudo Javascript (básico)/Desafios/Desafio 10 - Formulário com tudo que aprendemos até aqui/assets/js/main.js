
// Capturar evento de submit do formulário
const form = document.querySelector('#formulario'); //seleciona o formulário com o id "formulario"

form.addEventListener('submit', function (e) { //adiciona um ouvinte de evento no formulário, que escuta quando o formulário é enviado (submit)
    e.preventDefault(); //Faz com que não dê reload ao dar submit, evitando que a página seja recarregada quando o formulário é enviado

    const inputPeso = e.target.querySelector('#peso'); //seleciona o input do peso dentro do formulário que foi enviado
    const inputAltura = e.target.querySelector('#altura'); //seleciona o input da altura dentro do formulário que foi enviado

    const peso = Number(inputPeso.value); //converte o valor do input de peso em um número
    const altura = Number(inputAltura.value); //converte o valor do input de altura em um número

    if (!peso) { //verifica se o valor do peso é falso ou indefinido
        setResultado('Peso inválido', false); //chama a função "setResultado" com a mensagem de erro "Peso inválido" e o valor "false" para indicar que houve um erro
        return; //para a execução do código
    }
    if (!altura) { //verifica se o valor da altura é falso ou indefinido
        setResultado('Altura inválida', false); //chama a função "setResultado" com a mensagem de erro "Altura inválida" e o valor "false" para indicar que houve um erro
        return; //para a execução do código
    }

    const imc = getImc(peso, altura); //chama a função "getImc" passando o peso e a altura como argumentos e armazena o resultado na variável "imc"
    console.log(imc); //exibe o valor do IMC no console

    const nivelImc = getNivelImc(imc); //chama a função "getNivelImc" passando o IMC como argumento e armazena o resultado na variável "nivelImc"

    const msg = `Seu IMC é ${imc} (${nivelImc})`; //cria uma mensagem com o valor do IMC e o nível correspondente

    setResultado(msg, true) //chama a função "setResultado" passando a mensagem e o valor "true" para indicar que não houve erros

});


function getNivelImc (imc) { //define a função "getNivelImc" que recebe o IMC como argumento
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; //cria um array com os níveis de IMC correspondentes

    if (imc >= 39.9) return nivel[5]; //se o IMC for maior ou igual a 39.9, retorna o nível correspondente à obesidade grau 3
    if (imc >= 34.9) return nivel[4]; //se o IMC for maior ou igual a 34.9, retorna o nível correspondente à obesidade grau 2
    if (imc >= 29.9) return nivel[3]; //se o IMC for maior ou igual a 29.9, retorna o nível correspondente à obesidade grau 1
    if (imc >= 24.9) return nivel[2]; //se o IMC for maior ou igual a 24.9, retorna o nível correspondente ao sobrepeso
    if (imc >= 18.5) return nivel[1]; //se o IMC for maior ou igual a 18.5, retorna o nível correspondente ao peso normal
    if (imc < 18.5) return nivel[0]; //se o IMC for menor que 18.5, retorna o nível correspondente ao abaixo do peso

    //Não precisa de um bloco "else" porque cada condição é tratada separadamente e o "return" finaliza o código
    //Se o "if" tiver apenas uma linha de código, não é necessário usar chaves para delimitá-lo, mas é uma opção.
}


function getImc (peso, altura) { //define a função "getImc" que recebe o peso e a altura como argumentos
    const imc = peso / altura ** 2; //calcula o IMC dividindo o peso pela altura ao quadrado
    return imc.toFixed(2); //retorna o valor do IMC formatado com duas casas decimais
    }
    
    function criaP() { //define a função "criaP" que cria um elemento "p" (parágrafo) e o retorna
    const p = document.createElement('p'); //cria um elemento "p" usando o método "createElement" do objeto "document"
    return p; //retorna o elemento "p" criado
    }
    
    function setResultado (msg, isValid) { //define a função "setResultado" que recebe uma mensagem e um valor booleano que indica se a mensagem é válida ou não
    const resultado = document.querySelector('#resultado'); //seleciona o elemento HTML com o id "resultado" usando o método "querySelector" do objeto "document" e armazena em uma variável "resultado"
    resultado.innerHTML = ''; //limpa o conteúdo HTML do elemento "resultado" usando a propriedade "innerHTML"

    const p = criaP(); //cria um novo elemento "p" usando a função "criaP" e armazena em uma variável "p"

    if (isValid) { //verifica se a mensagem é válida (se "isValid" é verdadeiro)
     p.classList.add('paragrafoResultado'); //adiciona uma classe CSS chamada "paragrafoResultado" ao elemento "p" usando o método "classList.add"
    } else { //caso contrário (se "isValid" é falso)
        p.classList.add('bad'); //adiciona uma classe CSS chamada "bad" ao elemento "p"
    }
    
    p.innerHTML = msg; //define o conteúdo HTML do elemento "p" como a mensagem recebida como argumento usando a propriedade "innerHTML"
    resultado.appendChild(p); //adiciona o elemento "p" como um filho do elemento "resultado" usando o método "appendChild" do objeto "resultado"

}