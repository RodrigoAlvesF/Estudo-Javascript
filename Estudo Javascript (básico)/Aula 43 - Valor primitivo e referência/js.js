/*
Primitivos (imutáveis(Não pode mudar)) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - Array, Object, function - Passados por referência
*/

let a = [1, 2, 3];
let b = a;

console.log(a, b);

a.push(4)
console.log(a, b); // Se fosse um valor primitivo, B teria somente 1,2,3, como é um valor de referencia, tudo que é alterado mesmo depois do b ter recuperado o valor de A, o B também recebe a alteração, essa é a diferença de primitivo e referência.

b.pop()
console.log(a, b); // Nessa situação, ao alterar o b, o a também recebe a alteração por ser um valor referência.