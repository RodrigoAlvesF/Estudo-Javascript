// 3 escopos: global, função e bloco
//globa: script como um todo
//função: corresponde ao conteúdo dentro de um bloco de function
//bloco: instruções contidas dentro de comandos como os " if "

//Bloco faz variável global
//Função não faz variável global

var serie = "Friends"

//Escopo de bloco
if (true) {
    var serie2 = "Game of Thrones"
    document.write(serie)
}

document.write(serie2)

function x() {
    var serie3 = "The Walking Dead"
    document.write(serie)
    document.write(serie2)
}

document.write("<br/>")

x()