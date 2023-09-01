/*
Formula do imc
Imc = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo. 

IMC em adultos Condição 
- Abaixo de 18.5 Abaixo do peso; 
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;

*/

const peso = 87.0;
const altura = 1.83;

const Imc = peso / (altura * altura)

// Math.pow(altura,2) substitui (altura * altura)

if (Imc < 18.5){
    console.log('Abaixo do peso')
}else if (Imc >= 18.5 && Imc < 25){
    console.log('Peso normal')
}else if (Imc >= 25 && Imc < 30){
    console.log('Acima do Peso')
}else if (Imc >= 30 && Imc < 40){
    console.log('Obeso')
}else{
    console.log('Obesidade Grave')
}