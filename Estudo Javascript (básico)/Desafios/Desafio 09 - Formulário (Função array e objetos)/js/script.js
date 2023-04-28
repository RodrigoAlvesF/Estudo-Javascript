function meuEscopo () {
    const form = document.querySelector('.form'); //Selecionamos o elemento igual css
    const resultado = document.querySelector('.resultado');
    const pessoas = [] //precisamos criar um array para receber os dados

    function recebeEventoForm (evento) {
        evento.preventDefault(); //Previne o padrão(reload onsubmit false)

        const nome = form.querySelector('.nome'); //Selecionamos a classe .nome dentro de form através do querySelector
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({ //iremos adicionar os seguintes dados dentro do array
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })//Sempre que quisermos recuperar o valor/conteúdo, usamos .value

        console.log (pessoas);

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>` //Comando para aparecer os dados abaixo do forms
    }   

    form.addEventListener('submit', recebeEventoForm); // listener serve para remover o "on" (onsubmit), o segundo argumento será acionado após o primeiro argumento.
}
meuEscopo();