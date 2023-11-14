import db from "../database/db.js";

export const novoSKU = async (data) => {
    try {
        return await db.query(`
            INSERT INTO produtos (sku_name, nome, marca_id, unidade_de_estoque_id, descricao, ultimo_abastecimento)
            VALUES ($1, $2, $3, $4, $5, current_timestamp)
            `, [data.skuNome, data.nome, data.marcaId, data.unidadeDeEstoqueId, data.descricao]);
    } catch (error) {
        throw new Error(error);
    }
}

export const procurarSKU = async (data) => {
    try {
        return await db.query(`SELECT * FROM produtos WHERE nome = $1`, [data.nome]);
    } catch (error) {
        throw new Error(error);
    }
}

export const carregarTodosSKU = async () => {
    try {
        return await db.query(`SELECT * FROM produtos`);
    } catch (error) {
        throw new Error(error)
    }
}