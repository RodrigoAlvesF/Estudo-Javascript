// ? :

//exemplo
const pontuacaoUsuario = 1000;

/*
if(pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário comum')
}
*/

//Em operação ternária, fica assim:

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Comum';
//?: se for verdade (true)
//: caso contrário (false)
console.log(nivelUsuario)

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';
//||: Se for null coloca o valor seguinte
console.log(corPadrao)