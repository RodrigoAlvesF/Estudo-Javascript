lista_frutas = ['Maçã', 'Uva', 'Banana', 'Morango']

console.log(lista_frutas.sort())

lista_numeros = [12, 40, 3, 7, 19, 1]
//Para odernação numerica usamos o comando .sort
console.log(lista_numeros.sort(ordenaNumeros))
//Para ordenar quando há dezenas+, usamos a function abaixo
function ordenaNumeros(a, b) {
    return a - b
    //< 0 = a ordenado antes de b
    //> 0 = b ordenado antes de a 
    //== a ordem é mantida
}
