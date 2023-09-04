// classe define como as coisas devem ser, no exemplo abaixo pediu nome, idade
// uma instacia é uma ocorencia de uma pessoa. 

class pessoa {
    nome;
    idade;
    descrever() {
        console.log('Meu nome é ' + this.nome, 'e minha idade é ' + this.idade);

    }
}

const vitor = new pessoa();
vitor.nome = 'Vitor J Guerra';
vitor.idade = 25;

const renan = new pessoa();
renan.nome = 'renan Oliveira';
renan.idade = 30;

console.log(vitor);
console.log(renan);
vitor.descrever();
renan.descrever();