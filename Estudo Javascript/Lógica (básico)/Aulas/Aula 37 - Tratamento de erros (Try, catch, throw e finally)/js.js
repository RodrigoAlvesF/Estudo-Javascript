//netflix

var video = []
video[1] = [nome] = 'Fullmetal Alchemist'
video[1] = [categoria] = 'Anime'

function getVideo(video){

    //Para que o programa não morra ao encontrar um erro, usamos a seguinte função:

    //Apos tentar alguma coisa
    try {
        //lógica
        //http
        console.log(video[0]['nome'])
    } catch (erro) { //O parametro representa o erro produzido em try, assim podemos usar ele como se fosse uma variável
        tratarErro (erro)
        console.log ('Agora sim podemos tratar esse erro')
        throw new Error ('Houve um erro, estamos trabalhando nisso!!!')
    }

    finally { //Vamos finalizar issoda seguinte forma
        console.log ('Sempre passa por aqui (try / catch')
    }

    console.log('A aplicação não morreu')
}

function tratarErro(erro) {
    //Lógica para registar o erro no servidor
    console.log(erro)
}

getVideo(video)


