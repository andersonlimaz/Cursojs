/*
Codigo condição de PGT;
1-A vista debito, recebe 10% de desconto;
2-A vista no dinheiro ou Pix, recebe 15% de desconto;
3-Em duas vezes, preço normal de etiqueta sem juros;
4-Acima de duas vezes, preço de etiqueta mais juros 10%;
*/

function AplicarDesconto(valor, desconto){
    return(valor - (valor * (desconto / 100)));
}

function AplicarJuros(valor,juros){
    return(valor + (valor * (juros / 100)));
}
const PrecoEtiqueta = 100.00;
const formaDePagamento = 4;

if (formaDePagamento === 1){
    console.log(AplicarDesconto(PrecoEtiqueta,10));
}else if(formaDePagamento === 2){
    console.log(AplicarDesconto(PrecoEtiqueta, 15));
}else if (formaDePagamento === 3){
    console.log(PrecoEtiqueta);
}else{
    console.log(AplicarJuros(PrecoEtiqueta,10));
}