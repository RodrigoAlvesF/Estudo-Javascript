lista_frutas = ['Banana', 'Maçã', 'Morango', 'Uva']

var auxiliar = lista_frutas.indexOf('uva')

//Quando o elemento não existe o JS retorna "-1"
if (auxiliar === -1 ) {
    console.log ('Elemento não existe')
} else {
    console.log('Elemento está na posição ' + auxiliar)
}