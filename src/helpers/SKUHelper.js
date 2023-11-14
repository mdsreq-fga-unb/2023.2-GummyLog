export const batizaSKU = ({nome, marca}) => {
    let skuNome;
    skuNome = marca.slice(0,3).toUpperCase();
    skuNome = skuNome + parseInt(Math.random()*10000);
    skuNome = skuNome + nome.slice(0,3).toUpperCase();
    return skuNome;
}