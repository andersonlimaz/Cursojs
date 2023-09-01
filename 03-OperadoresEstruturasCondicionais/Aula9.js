/*
Codigo condição de PGT;
1-A vista debito, recebe 10% de desconto;
2-A vista no dinheiro ou Pix, recebe 15% de desconto;
3-Em duas vezes, preço normal de etiqueta sem juros;
4-Acima de duas vezes, preço de etiqueta mais juros 10%;
*/
const PrecoEtiqueta = 100.00;
const formaDePagamento = 4;

if (formaDePagamento === 1){
    console.log(PrecoEtiqueta - (PrecoEtiqueta * 0.1));
}else if(formaDePagamento === 2){
    console.log(PrecoEtiqueta - (PrecoEtiqueta *0.15));
}else if (formaDePagamento === 3){
    console.log(PrecoEtiqueta)
}else{
    console.log(PrecoEtiqueta + (PrecoEtiqueta * 0.1))
}