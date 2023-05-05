const verdadeira = true;

let nome = 'Luiz'; //Criando
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otávio' //Criando
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outra coisa'
        console.log(nome, nome2);
    }
} //Caso let esteja dentro de bloco, pode ser alterado, porém não pode ser alterado no mesmo escopo.

//LET NÃO PODE SER REDECLARADA 2 VEZES NO MESMO ESCOPO (alterar o que ela já tem)
//Let tem escopo de bloco {... bloco }
//Var só tem escopo de função, caso criarmos ele dentro de um escopo, ele substitui o do escopo global também pois ela é redeclarada e não criada como o let dentro de um escopo