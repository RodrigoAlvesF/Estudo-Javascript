/*
!: Negativo
&&: E
||: Ou
*/

//true && true = true
//true && true && false = false
if(2 == 2 && 3 >= 1 && "a" == "b") {
    document.write("Verdadeiro")
} else {
    document.write("Falso")
}

document.write("<br><br>")

//false || false || true = true
if(4 == 2 || 3 >= 5 || "a" == "a") {
    document.write("Verdadeiro")
} else {
    document.write("Falso")
}

document.write("<br><br>")

//true = true
if(!(4 == 2)) {
    document.write("Verdadeiro")
} else {
    document.write("Falso")
}

document.write("<br><br>")
document.write("Operador If else")
document.write("<br>")

var faltas = prompt("Digite a quantidade de faltas:")
var nota = prompt("Digite a nota do aluno:")
var media = 7
var faltas_maximas = 15

if (nota >= media && faltas <= faltas_maximas) {
    document.write("Aprovado")
} else {
    document.write("Reprovado")
}

document.write("<br><br><br>")
document.write("Operador ternário:")
document.write("<br>")


var resultado = (nota >= media && faltas <= faltas_maximas) ? "Aprovado" : "Reprovado"
document.write(resultado)