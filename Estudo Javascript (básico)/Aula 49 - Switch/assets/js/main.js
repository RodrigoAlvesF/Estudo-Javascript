/*
if (diaSemana === 0 ){
    diaSemanaTexto = "Domingo";
} else if (diaSemana === 1) {
    diaSemanaTexto = "Segunda";
} else if (diaSemana === 2) {
    diaSemanaTexto = "Terça";
} else if (diaSemana === 3) {
    diaSemanaTexto = "Quarta";
} else if (diaSemana === 4) {
    diaSemanaTexto = "Quinta";
} else if (diaSemana === 5) {
    diaSemanaTexto = "Sexta";
} else if (diaSemana === 6) {
    diaSemanaTexto = "Sábado";
} else { Se nenhum dia for compatível, cai no else
    diaSemanaTexto = ''
}
*/


/*
//Abaixo veremos como ficaria com switch (caso for uma unica variável, podemos utilizar o switch)
//Obrigatório colocar a palavra break
switch(diaSemana) {
case 0:
    diaSemanaTexto = "Domingo";
    break;
case 1:
    diaSemanaTexto = "Segunda";
    break;
case 2:
    diaSemanaTexto = "Terça";
    break;
case 3:
    diaSemanaTexto = "Quarta";
    break;
case 4:
    diaSemanaTexto = "Quinta";
    break;
case 5:
    diaSemanaTexto = "Sexta";
    break;
case 6:
    diaSemanaTexto = "Sábado";
    break;
default: //Caso nenhum for válido, entra no default.
    diaSemanaTexto = '';
    break; //Não é obrigatório o break no default
}
*/


// Cria um novo objeto de data com a data e hora atuais
const data = new Date();

// Pega o dia da semana atual em formato numérico (0 a 6, sendo 0 = Domingo)
let diaSemana = data.getDay();

/*
Se o dia da semana atual for igual a 0, o diaSemanaTexto será "Domingo".
Caso contrário, se o dia da semana atual for igual a 1, o diaSemanaTexto será "Segunda".
E assim por diante, até chegar em 6, que corresponde ao "Sábado".
Caso o dia da semana atual não seja nenhum dos valores acima, diaSemanaTexto será uma string vazia ("").
*/
// if/else statement substituído pelo switch/case statement
// O switch/case verifica o valor da variável diaSemana e executa o bloco de código correspondente
// O default é executado quando nenhum dos casos anteriores é válido
// O break finaliza a execução do bloco de código do caso correspondente
// O bloco de código do default não precisa do break, pois é o último caso
// A função getDiaSemanaTexto faz a mesma coisa que o switch/case e retorna o dia da semana em formato de texto
function getDiaSemanaTexto(diaSemana) {
let diaSemanaTexto;

switch(diaSemana) {
    case 0:
        diaSemanaTexto = "Domingo";
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = "Segunda";
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = "Terça";
       return diaSemanaTexto;
    case 3:
        diaSemanaTexto = "Quarta";
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = "Quinta";
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = "Sexta";
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = "Sábado";
        return diaSemanaTexto;
    default:
        diaSemanaTexto = '';
        return diaSemanaTexto;
    }
}

// Chama a função getDiaSemanaTexto e passa o valor de diaSemana como argumento
// O valor retornado pela função é armazenado na variável diaSemanaTexto
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

// Exibe no console o valor de diaSemana (número) e diaSemanaTexto (texto)
console.log(diaSemana, diaSemanaTexto);    