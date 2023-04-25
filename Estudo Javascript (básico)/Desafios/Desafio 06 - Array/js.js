var objetos = ['Cadeira', 'Impressora', 'Garfo']

function adicionarObjetos() {
    //Recupera o valor inserido no campo id input
    var objeto = document.getElementById('objeto').value

    //Caso possua algum valor preenchido entra no if
    if (objeto != '') {
        //Verifica se o valor não está repetido
        //Se sim, informa que o valor já existe, se não adiciona o valor
        if( objetos.indexOf(objeto) != -1) {
            alert('Objeto já foi adicionado')
        } else {
            objetos.push(objeto)
            console.log(objetos)

            document.getElementById('objeto').value = '' 
        }
        
    } else {
        alert('Informe um objeto válido')
    }
}

function ordenarObjetos() {
    objetos.sort()
    console.log(objetos)
}
