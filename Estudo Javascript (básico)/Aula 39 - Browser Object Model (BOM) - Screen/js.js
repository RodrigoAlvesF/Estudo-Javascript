//AvailHeight e Availwidth: fornece acesso ás propriedades excluindo a barra de ferramentas

//Height e Width: fornece total incluindo barra de ferramentas
//Os valores mostrados são sobre o tamanho de toda a tela, e não do browser

var altura = window.screen.availHeight
var largura = window.screen.availWidth

/*document.write('A altura do navegador é: ' + altura + '<br />')
document.write('A largura do navegador é: ' + largura )*/

//Podemos realizar alguns testes:

if( largura < 500 ){
    document.write('lógica para impressão do menu versão Mobile')
} else {
    document.write('lógica para impressão do menu versão Web')
}