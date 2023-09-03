/* Objetos
podemos atribuir um objeto, forma mais simples é objeto literal, 
objeto é uma coleção de valores, agrupa valores, funciona atraves de chave e valor. 

obj literal ex: 
um objeto no javascrip é uma coleção dinamica de chave e valor. 
*/

const victor = {
    nome: 'victor J Guerra', 
    idade: 25
};
// podemos atribuir valores depois

victor.altura = 1.69;

// como deletar

delete victor.nome;

console.log(victor);
