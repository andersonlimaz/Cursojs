const PrecoEtanol = 3.87;
const PrecoGasolina = 6.29;
const KmPorLitros = 10;
const DistanciaEmKm = 100;
const tipoCombustivel = 'gasolina';
const litrosConsumidos = DistanciaEmKm / KmPorLitros

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * PrecoEtanol
    console.log(valorGasto.toFixed(2))
} else {
    const valorGasto = litrosConsumidos * PrecoGasolina
    console.log(valorGasto.toFixed(2))
}


