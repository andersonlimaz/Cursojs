function EscrevaMeuNome(nome){ 
    return ('Meu nome é '+ nome);
}

EscrevaMeuNome('Anderson');
EscrevaMeuNome('Giulia');   

function VerificarMaiorIdade(idade){
    if (idade >=18){
        console.log(EscrevaMeuNome('Giulia, ') + 'e eu sou menor de idade, eu tenho ' + idade )
    }else{
        console.log('Maior de idade ela tem ' + idade)
    } 
}

VerificarMaiorIdade('18')