import * as produtosServices from "../services/produtosServices.js"
import * as SKUServices from "../services/SKUServices.js";

export const novoProduto = async (req, res) => {
    const data = req.body;

    try {
        const ans = await produtosServices.novoProduto(data);
        return res.status(ans.response).send(ans.message);
    } catch (error) {
        throw new Error(error);
    }
}

export const buscaProduto = async (req, res) => {
    const data = req.query;

    try {
        const ans = await produtosServices.buscaProduto({ ...data });
        return res.status(ans.response).send({ message: ans.message, payload: ans.payload });
    } catch (error) {
        throw new Error(error);
    }
}

export const atualizaProduto = async (req, res) => {
    const data = req.body;

    try {
        const ans = await produtosServices.atualizaProduto(data);
        return res.status(ans.response).send(ans.message);
    } catch (error) {
        throw new Error(error);
    }
}

export const vendeProduto = async (req, res) => {
    const data = req.body

    try {
        const produtos = await SKUServices.buscaSKU(data);
        const skuId = produtos.payload[0].id;
        console.log('SKU ID:', skuId);

        const produto = await produtosServices.buscaProduto({ skuId: produtos.payload[0].id });
        console.log('PRODUTO ID: ', produto);
        const quantidadeAtual = produto.payload[0].quantidade;
        console.log('QUANTIDADE: ', quantidadeAtual);

        const quantidadeVendida = data.quantidadeVendida;
        console.log('QUANTIDADE VENDIDA: ', quantidadeVendida);
        const novaQuantidade = quantidadeAtual - quantidadeVendida;
        console.log('NOVA QUANTIDADE: ', novaQuantidade)
        await produtosServices.atualizaProduto({ quantidade: novaQuantidade, unidadeDeEstoqueId: data.unidadeDeEstoqueId, skuId: skuId });
        const ans = await produtosServices.vendeProduto(data, skuId);
        return res.status(ans.response).send(ans.message);

    } catch (error) {
        throw new Error(error);
    }
}