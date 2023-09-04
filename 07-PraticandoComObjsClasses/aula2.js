/*
2) Crie uma Classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso/ (altura * altura));
Instancie uma pessoa chama José que tenha 70kg de peso e 1,75 de altura ao José para dizer o valor 
dos seu IMC;
*/
class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    CalculaIMC() {
        return this.peso / (this.altura * this.altura)
    }
}

const jose = new Pessoa('jose', 70, 1.75);
console.log(jose.CalculaIMC())
const anderson = new Pessoa('Anderson', 87, 1.83)
console.log(anderson.CalculaIMC())