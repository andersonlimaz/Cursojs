/*
Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade e imprima a sua media e a sua classificação conforme a tabela abaixo.

media = (nota 1 + nota 2 + nota 3 ) /3.

Classificação:
- Media menor que 5, reprovação;
- Media entre 5 e 7, recuperação;
- Media acima de 7, passou de semestre;


*/

const nota1 = 10;
const nota2 = 5;
const nota3 = 10;
media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(1));
if (media < 5) {
    console.log('Reprovado');
}else if (media >= 5 && media <=7){
    console.log('Recuperação')
}else{
    console.log('Passou de semestre')
}