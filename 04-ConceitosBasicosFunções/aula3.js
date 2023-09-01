// Exemplo Pratico com Funções. 

function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2); 
}

function classificarImc(Imc){
    
    if (Imc < 18.5){
        return('Abaixo do peso')
    }else if (Imc >= 18.5 && Imc < 25){
        return('Peso normal')
    }else if (Imc >= 25 && Imc < 30){
        return('Acima do Peso')
    }else if (Imc >= 30 && Imc < 40){
        return('Obeso')
    }else{
        return('Obesidade Grave')
    }
}
(function main(){
    const peso = 87.0;
    const altura = 1.83;

    const Imc = calcularImc(peso,altura)
    console.log(classificarImc(Imc))
})()
