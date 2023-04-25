function holder(vermelho) {
    document.getElementById('input').style.backgroundColor = vermelho
} //Função para alterar a cor


function out() {
    let out = document.getElementById('input').value
    //O let serve para que o "out" receba os valores que tem em input

    //Para assim testar com o if
    if(out.length < 3) {
        document.getElementById('input').style.background = "red"
        } else {
        document.getElementById('input').style.background = "green"
        }

}