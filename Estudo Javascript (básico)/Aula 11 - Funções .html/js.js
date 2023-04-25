//void: não fornece nenhum retorno
//retorno: retornam um parametro

/*
function calcularAreaTerreno ( largura, comprimento ) {
    //lógica
    var area = largura * comprimento

    //document.write("O terreno possui " + area + " metros quadrados")

    return area
}

var largura = prompt("Digite a largura do terreno em metros")
var comprimento = prompt("Digite o comprimento do terreno em metros")

var area = calcularAreaTerreno(largura, comprimento)

document.write ('O terreno possui ' + area + ' metros quadrados.')
*/

function soma(a, b) {
    // b = b === undefined ? 0 : b ||| b é igual a NaN ? se sim aplicar 0 se não aplicar b
    return a + b
}

console.log (soma(7,7))
console.log (soma(7,7,9,15)) // Desconsidera os parametros adicionais
console.log (soma(7))
console.log (soma())
