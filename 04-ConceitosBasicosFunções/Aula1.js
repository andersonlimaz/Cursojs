/*
Funções em javascript
primeiro ex 
function teste(){
    console.log('teste');
}

teste();
teste();
*/
function incrementarJuros(valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros / 100) * valor;;
    return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(500, 12));