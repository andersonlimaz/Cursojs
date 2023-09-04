// constructor obriga que o parametro seja passado, pois sempre que você for criar uma class passa por ela. 
class pessoa {
    nome;
    idade;
    anoDeNacismento;
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNacismento = 2023 - idade
    }
    descrever() {
        console.log('Meu nome é ' + this.nome, 'e minha idade é ' + this.idade);

    }
}

const vitor = new pessoa('Vitor', 29);
const renan = new pessoa('Renan', 30);

console.log(vitor)