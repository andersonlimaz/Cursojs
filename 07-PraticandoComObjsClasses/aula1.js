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

    calcularGastoPercurso(distanciaKm,precoCombustivel){
        return distanciaKm * this.GastoMedioPorKm * precoCombustivel
    }
}


const Panamera = new Carros('Porchea', 'blue', 1/12)
resultado = Panamera.calcularGastoPercurso (70, 5)
console.log(resultado)

const palio = new Carros('Fiat', 'Azul', 1/10);
console.log(palio.calcularGastoPercurso(70,5))