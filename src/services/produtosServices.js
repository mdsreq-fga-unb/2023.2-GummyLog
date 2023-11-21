import * as produtosRepositories from "../repositories/produtosRepositories.js";
import * as SKURepositories from "../repositories/SKURepositories.js";

export const novoProduto = async (data) => {
    try {
        const existe = await SKURepositories.buscaSKU(data);

        if (existe.rowCount === 0) {
            return { response: 404, message: "SKU não encontrado" }
        }
        await produtosRepositories.novoProduto({ ...data });
        return { response: 201, message: "Produto Registrado" };

    } catch (error) {
        throw new Error(error);
    }
}

export const buscaProduto = async (data) => {
    try {
        const produtos = await produtosRepositories.buscaProduto({ ...data });
        if (produtos.length === 0) {
            return { message: "Produto não Encontrado", response: 404};
        }
        return { response: 200, message: "Produto encontrado", payload: produtos };
    } catch (error) {
        throw new Error(error);
    }
}

export const atualizaProduto = async (data) => {
    const { skuId } = data;

    try {
        const existeProduto = await produtosRepositories.buscaProduto({ skuId });

        if (existeProduto.length === 0) {
            return { response: 404, message: "Produto não encontrado" }
        }
        await produtosRepositories.atualizaProduto({ ...data });
        return { response: 200, message: "Produto Atualizado" };
    } catch (error) {
        throw new Error(error)
    }
}