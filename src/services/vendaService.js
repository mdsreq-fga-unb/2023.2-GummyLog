import { batizaOrdemDeVenda } from "../helpers/vendaHelper.js";
import * as vendasRepositories from "../repositories/vendaRepositories.js";
import * as produtosRepositories from "../repositories/produtosRepositories.js";

export const vendeProduto = async (data) => {
    let verificaOrdemDeVenda;
    let ordemDeVenda;

    do {
        ordemDeVenda = batizaOrdemDeVenda();
        verificaOrdemDeVenda = await vendasRepositories.verificaOrdemDeVenda(ordemDeVenda);
    } while (verificaOrdemDeVenda.rowCount > 0);

    const informacoesDoProduto = await produtosRepositories.buscaProduto({skuId: data.skuId});
    if (informacoesDoProduto.length === 0) return {response: 404, message: "Produto não encontrado"};
    const quantidadeVendida = data.quantidadeVendida;
    const novaQuantidade = informacoesDoProduto[0].quantidade - quantidadeVendida;
    if (novaQuantidade < 0) return {response: 403, message: "A quantidade vendida supera a quantidade disponível em estoque"};
    await produtosRepositories.atualizaProduto({ quantidade: novaQuantidade, unidadeDeEstoqueId: informacoesDoProduto[0].unidadeDeEstoqueId, skuId: data.skuId });
    await vendasRepositories.vendeProduto({ ...data, ordemDeVenda });
    return { response: 201, message: "Produto colocado na lista de vendas"};
}

export const buscaVenda = async (data) => {
    try {
        const vendas = await vendasRepositories.buscaVenda({ ...data });
        if (vendas.length === 0) {
            return { response: 404, message: "Venda não encontrada" };
        }
        return { response: 200, message: "Venda encontrada", payload: vendas};
    } catch (error) {
        throw new Error(error);
    }
}


export const atualizaVenda = async (data) => {
    const existeVenda = await vendasRepositories.buscaVenda(data);
    if (existeVenda.length === 0) {
        return { response: 404, message: "Venda não encontrada" }
    }
    await vendasRepositories.atualizaVenda({ novoStatus: data.novoStatus, ordemDeVenda: data.ordemDeVenda});
    return { response: 200, message: "Venda atualizada"};
}