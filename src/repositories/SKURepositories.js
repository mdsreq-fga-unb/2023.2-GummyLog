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

export const buscaSKU = async ({ nome, marcaId, unidadeDeArmazenamento, dataInicio, dataFim }) => {
    try {
        let query = `SELECT * FROM produtos`;
        const values = [];
        if (nome || marcaId || unidadeDeArmazenamento || (dataInicio && dataFim)) {
            query += ` WHERE`;
        }

        if (marcaId) {
            values.push(marcaId);
            query += ` ${values.length > 1 ? "AND" : ""} marca_id = $${values.length}`;
        }

        if (nome) {
            values.push(nome);
            query += ` ${values.length > 1 ? "AND" : ""} nome = $${values.length}`;
        }

        if (unidadeDeArmazenamento) {
            values.push(unidadeDeArmazenamento);
            query += ` ${values.length > 1 ? "AND" : ""} unidade_de_estoque_id = $${values.length}`;
        }

        if (dataInicio && dataFim) {
            values.push(dataInicio, dataFim);
            query += ` ${values.length > 2 ? "AND" : ""} ultimo_abastecimento BETWEEN $${values.length - 1} AND $${values.length}`;
        }

        const result = await db.query(query, values);
        return result.rows;

    } catch (error) {
        throw new Error(error);
    }
}