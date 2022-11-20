function aplicarDesconto(valor, desconto) {
    return (valor - (valor * desconto / 100));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * juros / 100));
}

const precoEtiqueta = 100;
const condicaoPagamento = 1;

if (condicaoPagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
}else if (condicaoPagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
}else if (condicaoPagamento === 3) {
    console.log(precoEtiqueta );
}else if (condicaoPagamento === 4) {
    console.log(aplicarJuros (precoEtiqueta, 10));
}   