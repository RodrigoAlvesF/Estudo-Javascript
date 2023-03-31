listaConvidados = ['Jorge', 'Jamilton', 'José', 'Ana', 'Maria']

//A variavel declarada vai receber a cada interação a posição do array, exemplo:

console.log(listaConvidados)
for(var x in listaConvidados) {
 console.log('Índice ' + x + ' valor ' + listaConvidados [x])
}

//Para receber o VALOR, usamos o array igual o exemplo acima

/*Este recurso é importante quando não temos posição definida de forma lógica, como se a posição não fosse números ordenados, exemplo:
100 = Jorge
zebra = Jamilton
-40 = José

a esquerda temos o INDICE/POSIÇÃO, dessa forma, o for in nos ajuda para saber qual posição devemos usar para acessar tal valor sem erro.
*/