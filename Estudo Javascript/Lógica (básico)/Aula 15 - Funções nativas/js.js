//propriedade length
var nome = " Jorge Sant Ana "

document.write ("jorge Sant Ana".length)
//Diz a quantidade de bytes
document.write("<br>")
document.write ("jorge Sant Ana".charAt(7))
//Mostra qual caractere tá na posição indicada
document.write("<br>")
document.write ("jorge Sant Ana".indexOf("g"))
//Diz qual posição do caractere indicado
document.write("<br>")
document.write ("jorge Sant Ana".replace("Sant Ana", "Silva"))
//Substitui
document.write("<br>")
document.write (nome.substr(6,4))
//A partir da posição indicada até a posição indicada mostra os caracteres
document.write("<br>")
document.write (nome.toLowerCase())
//tudo minúsculo
document.write("<br>")
document.write (nome.toUpperCase())
//Tudo maiúsculo
document.write("<br>")
document.write ("-" + nome.trim() + "-")
//Remove espaços laterais da variável