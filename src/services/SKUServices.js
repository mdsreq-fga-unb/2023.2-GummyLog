import * as SKURepositories from "../repositories/SKURepositories.js";
import *  as marcasRepositories from "../repositories/marcasRepositories.js";
import { batizaSKU } from "../helpers/SKUHelper.js";

export const novoSKU = async (data) => {
    try {
        const existe = await SKURepositories.buscaSKU({ nome: data.nome });
        if (existe.rowCount > 0) return { response: 409, message: "Produto já Cadastrado" };
        const marcaNome = await marcasRepositories.procurarMarcaPorId({ id: data.marcaId });
        const skuNome = batizaSKU({ nome: data.nome, marca: marcaNome.rows[0].nome });
        const skuData = { ...data, skuNome };
        await SKURepositories.novoSKU(skuData);
        return { response: 201, message: "Produto Registrado" };
    } catch (error) {
        throw new Error(error);
    }
}

export const buscaSKU = async (data) => {
    try {
        const SKUS = await SKURepositories.buscaSKU({...data});
        return SKUS;
    } catch (error) {
        throw new Error(error);
    }
}