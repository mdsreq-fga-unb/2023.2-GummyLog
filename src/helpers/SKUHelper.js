export const batizaSKU = ({nome, marca}) => {
    let skuNome;
    skuNome = marca.slice(0,3).toUpperCase();
    skuNome = skuNome + quatroNumerosAleatorios();
    skuNome = skuNome + nome.slice(0,3).toUpperCase();
    return skuNome;
}

const quatroNumerosAleatorios = () => {
    let numeroAleatorio;
    do{
        numeroAleatorio = parseInt(Math.random()*10000).toString();
    } while (numeroAleatorio.length < 4);

    return numeroAleatorio;
}