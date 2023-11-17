import * as produtosRepositories from "../repositories/produtosRepositories.js";
import * as SKURepositories from "../repositories/SKURepositories.js";

export const novoProduto = async (data) => {
    try {
        const existe = await SKURepositories.buscaSKU(data);
        console.log(existe.rows);
        if (existe.rowCount === 0) {
            return { response: 404, message:"SKU não encontrado" }
        }
        await produtosRepositories.novoProduto({...data});
        return { response: 201, message: "Produto Registrado" };
        
    } catch (error) {
        throw new Error(error);
    }
}

export const buscaProduto = async (data) => {
    try {
        const produtos = await produtosRepositories.buscaProduto({...data});
        return produtos;
    } catch (error) {
        throw new Error(error);
    }
}

export const atualizaProduto = async (data) => {
    try {


    } catch (error) {
        throw new Error(error)
    }
}