let assinatura = {
    idCliente: 1000,
    descricao: 'Acesso a internet',
    status() {
        console.log('Ativo')
    }
}

console.log(assinatura.descricao)

let y = assinatura

console.log(y.descricao)

y.descricao = 'Internet + TV + Telefone'

console.log(assinatura.descricao)
console.log(y.descricao)

//Resumo da aula:

/*
Claro! Vou explicar o código linha por linha:

1. `let assinatura = {`: Aqui estamos declarando uma variável chamada `assinatura` e atribuindo a ela um objeto.
2. `idCliente: 1000,`: Estamos definindo uma propriedade `idCliente` para o objeto `assinatura` e atribuindo o valor `1000` a essa propriedade.
3. `descricao: 'Acesso a internet',`: Definimos outra propriedade chamada `descricao` e atribuímos a ela o valor `'Acesso a internet'`.
4. `status() {`: Aqui estamos definindo um método chamado `status` para o objeto `assinatura`.
5. `console.log('Ativo')`: O método `status` exibe a string `'Ativo'` no console quando chamado.
6. `}`: Fechamento do método `status`.
7. `console.log(assinatura.descricao)`: Exibe no console o valor da propriedade `descricao` do objeto `assinatura`. No caso, exibirá `'Acesso a internet'`.
8. `let y = assinatura`: Atribuímos o valor da variável `assinatura` à variável `y`. Isso significa que `y` agora faz referência ao mesmo objeto que `assinatura`.
9. `console.log(y.descricao)`: Exibe no console o valor da propriedade `descricao` do objeto referenciado pela variável `y`. Como `y` e `assinatura` referenciam o mesmo objeto, o valor exibido será `'Acesso a internet'`.
10. `y.descricao = 'Internet + TV + Telefone'`: Alteramos o valor da propriedade `descricao` do objeto referenciado por `y` para `'Internet + TV + Telefone'`.
11. `console.log(assinatura.descricao)`: Exibe no console o valor da propriedade `descricao` do objeto `assinatura`. Agora, devido à alteração anterior, o valor exibido será `'Internet + TV + Telefone'`.
12. `console.log(y.descricao)`: Exibe no console o valor da propriedade `descricao` do objeto referenciado por `y`. Como `y` e `assinatura` referenciam o mesmo objeto, o valor exibido também será `'Internet + TV + Telefone'`.

Em resumo, o código define um objeto chamado `assinatura` com duas propriedades (`idCliente` e `descricao`) e um método (`status`). Em seguida, cria uma variável `y` que referencia o mesmo objeto. Alterar a propriedade `descricao` através de `y` também afeta o valor da propriedade `descricao` em `assinatura`, porque ambas as variáveis estão apontando para o mesmo objeto.
*/