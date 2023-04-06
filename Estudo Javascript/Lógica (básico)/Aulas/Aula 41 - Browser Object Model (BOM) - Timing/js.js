
//Uma ação que será executada após 1 segundo
//Interval é um loop infinito 
var  i = 5
    //se quisermos finalizar, devemos transformar a função em variável como abaixo

    var x = setInterval(function() 
    {
        document.write(i + '<br/>')
        i--

        if(i === 0) {
            clearInterval(x)
            //window.location.reload() //Reload: atualiza a página
            //também podemos usar o clearInterval() para finaliar

        }
    }, 1000)


/*setInterval(function() {document.write('teste interval 1 segundo' + '<br/>' )}, 4000)*/

