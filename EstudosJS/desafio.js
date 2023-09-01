/* Faça um programa para calcular o valor de uma viagem
 Você terá 3 variaveis. Sendo elas.
 1 - preço do combustivel;
 2 - Gasto médio de combustivel do carro  po KM;
 3 - Distancia em KM da viagem;
 imprimir no console o valor que sera gasto para realizar esta viagem. 
*/
const precoCombustivel = 5.32;
const KmPorLitros = 10;
const DistanciaKm = 100;

const LitrosConsumidos = DistanciaKm / KmPorLitros;
const total = LitrosConsumidos * precoCombustivel;

console.log(total.toFixed(2));

