// else if, operadores de condicional simples. 
const numero = 0;

const numeroDivisivelPor5 = (numero % 5 ) === 0;

if (numero === 0){
    console.log('O número é invalido');
}else if (numeroDivisivelPor5) {
    console.log('Sim');

} else{
  console.log('Não');
}