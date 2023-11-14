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

export const filtraSKU = async (nome, marcaId, unidadeDeArmazenamento, dataInicio, dataFim) => {
    try {

        let query = `SELECT * FROM produtos WHERE 1=1`;
        const values = [];

        if (marcaId) {
            query += ` AND marca_id = $1`;
            values.push(marcaId);
        }
        if (nome) {
            query += ` AND nome = $1`;
            values.push(nome);
        }
        if (unidadeDeArmazenamento) {
            query += ` AND unidade_de_estoque_id = $1`;
            values.push(unidadeDeArmazenamento);
        }
        if (dataInicio) {
            query += ` AND ultimo_abastecimento = $1`;
            values.push(dataInicio);
        }

        const result = await db.query(query, values);
        return result;

    } catch (error) {
        throw new Error(error);
    }
} 