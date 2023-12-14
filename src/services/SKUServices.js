
import * as SKURepositories from "../repositories/SKURepositories.js";
import *  as marcasRepositories from "../repositories/marcasRepositories.js";
import { batizaSKU } from "../helpers/SKUHelper.js";

export const novoSKU = async (data) => {
    try {
        const marcaNome = await marcasRepositories.procurarMarcaPorId({ id: data.marcaId });
        const skuNome = batizaSKU({ nome: data.nome, marca: marcaNome.rows[0].nome });
        const skuData = { ...data, skuNome };
        const existeSku = await SKURepositories.buscaSKU({ ...data });
        if (existeSku.length > 0) {
            return { response: 409, message: "SKU já cadastrado"};
        }
        await SKURepositories.novoSKU(skuData);
        return { response: 201, message: "SKU criado com sucesso" };

    } catch (error) {
        throw new Error(error);
    }
}

export const buscaSKU = async (data) => {
    
    try {
        const skus = await SKURepositories.buscaSKU({...data});
        if (skus.length === 0) {
            return { message: "SKU não Encontrado", response: 404 };
        }
        return { response: 200, payload: skus };
    } catch (error) {
        throw new Error(error);
    }
}
