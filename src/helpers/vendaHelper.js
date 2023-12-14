export const batizaOrdemDeVenda = () => {
    let ordemDeVenda;

    do{
        ordemDeVenda = parseInt(Math.random()*10000000000).toString();
    } while (ordemDeVenda.length < 10);
    return ordemDeVenda;
}