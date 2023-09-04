// class Pessoa {
//     nome;
//     idade;

//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// function descreverPessoa(pessoa) {
//     console.log(`Nome: ${pessoa.nome}; Idade: ${pessoa.idade};`);
// }

// const renan = new Pessoa('Renan', 30);
// console.log(descreverPessoa(renan));

// const dev = {
//     nome: 'Renan',
//     linguagemPreferida: 'JavaScript'
// };

// console.log(dev.linguagemPreferida);,

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);
    }
}

new Pessoa('Renan', 30).descrever();