function submit() {
    //Selecionar o valor digiado
    var caracter = document.getElementById("entrada").value
    //.value faz com que recupere o que é digitado

    //limpar o campo de digitação:
    document.getElementById("entrada").value = ''

    //Limpar espaços em branco nas extermidades
    caracter.trim()

    switch(caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        //Adicionar o caracter no campo referente a numeros
            document.getElementById('numeros').value += caracter
            break
        default:
        //Adicionar o caracter no campo referente a letras
        document.getElementById('letras').value += caracter
    }
}