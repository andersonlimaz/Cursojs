/*
1 - Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Kilômetro rodado.
Crie um metodo que dado a quantidade de quilometros e o preço do combustivel nos de o valor 
gasto em reais para realizar este percurso. 
*/
class Carros{
    marca;
    cor;
    GastoMedioPorKm;

    constructor(marca,cor,GastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.GastoMedioPorKm = GastoMedioPorKm;

    }
}


const Panamera = new Carros('Porchea', 'blue', 1/5)
console.log(Panamera)