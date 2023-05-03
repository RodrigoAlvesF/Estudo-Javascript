// Função que recebe um número e adiciona um "0" à esquerda se for menor que 10
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
  }
  
  // Função que recebe um objeto Date e retorna uma string formatada com a data e hora
  function formataData(data) {
    // Recupera o dia e adiciona um "0" à esquerda se necessário
    const dia = zeroAEsquerda(data.getDate());
  
    // Recupera o mês e adiciona um "0" à esquerda se necessário
    const mes = zeroAEsquerda(data.getMonth() + 1);
  
    // Recupera o ano e adiciona um "0" à esquerda se necessário
    const ano = zeroAEsquerda(data.getFullYear());
  
    // Recupera a hora e adiciona um "0" à esquerda se necessário
    const hora = zeroAEsquerda(data.getHours());
  
    // Recupera o minuto e adiciona um "0" à esquerda se necessário
    const min = zeroAEsquerda(data.getMinutes());
  
    // Recupera o segundo e adiciona um "0" à esquerda se necessário
    const seg = zeroAEsquerda(data.getSeconds());
  
    // Retorna uma string formatada com a data e hora
    return `${dia} / ${mes} / ${ano} - ${hora}:${mes}:${seg}`;
  }
  
  // Cria um objeto Date com a data e hora atuais
  const data4 = new Date();
  
  // Chama a função formataData, passando o objeto Date como argumento
  const dataBrasil = formataData(data4);
  
  // Imprime a string formatada no console
  console.log(dataBrasil);