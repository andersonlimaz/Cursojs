const pessoa = {
    nome: 'victor J Guerra', 
    idade: 25,
    descrever: function(){
        this
        console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade);
    }
};

// acessando os dados de uma maneira mais dinamica. 

// const atributo = 'idade';
// console.log(pessoa[atributo]);
// console.log(pessoa['nome']);
// acesso dinamico
pessoa['nome'] = 'teste';
// acesso direto
pessoa.nome ='teste';