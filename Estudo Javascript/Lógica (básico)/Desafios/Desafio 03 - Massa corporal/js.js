var nome = prompt('Digite seu nome:');
var altura = prompt('Digite sua altura em cm:');
var peso = prompt('Digite seu peso:');

altura = parseFloat(altura);
peso = parseFloat(peso);

altura = (altura/100);

var imc = (peso / (altura * altura)).toFixed(2);

if ( imc < 16) {
    var classificacao = "Baixo peso - MUITO GRAVE";
}
else if ( imc >= 16 && imc <= 16.99) {
    var classificacao = "Baixo peso - GRAVE";
}
else if ( imc >= 17 && imc <= 18.49) {
    var classificacao = "Baixo peso";
}
else if ( imc >= 18,50 && imc <= 24.99) {
    var classificacao = "Peso normal";
}
else if ( imc >= 25 && imc <= 29.99) {
    var classificacao = "Sobrepeso";
}
else if ( imc >= 30 && imc <= 34.99) {
    var classificacao = "Obesidade grau I";
}
else if ( imc >= 35 && imc <= 39.99) {
    var classificacao = "Obesidade grau II";
}
else {
    var classificacao = "Obesidade grau III";
}


document.write(nome + " possui indice de massa corporal igual a " + imc+ ", " + "sendo classificado como: " + classificacao + ".")