// função dentro de um objeto é chamadade metodo.
// this diz respeito aonde essa função esta sendo implementada, contexto, 
const pessoa = {
    nome: 'victor J Guerra',
    idade: 25,
    descrever: function () {
        this
        console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade);
    }
};

pessoa.descrever = function () {
    console.log('Meu nome é ' + this.nome)
}

pessoa.nome = 'Anderson';
pessoa.idade = 27;
pessoa.descrever();