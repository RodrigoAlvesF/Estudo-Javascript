var parametro = prompt ("Digite um número")

switch (parseInt(parametro)) {
    case 1:
        //se parametro === 1
        document.write ("Parametro 1")
        break

    case 2:
        //se parametro === 2
        document.write ("Parametro 2")
        break 
        //Break: Fim do case1

    case 3:
        //se parametro === 3
        document.write ("Parametro 3")
        break


    default:
        //se parametro não encontrado
        document.write ("Default")

}