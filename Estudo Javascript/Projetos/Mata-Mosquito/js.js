function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()


function posicaoRandomica(){

    // Math.floor faz o arredondamento para baixo para tirar as casas decimais
    //Usamos o Math.random * o valor que queremos que seja o máximo do random.
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX 
    posicaoY = posicaoY < 0 ? 0 : posicaoY


    console.log(posicaoX, posicaoY)

    //Cirar o elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = 'mosca'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    //para adicionarmos um elemento dentro de outro elemento, transformamos ele é uma variável
    document.body.appendChild(mosquito)

}
