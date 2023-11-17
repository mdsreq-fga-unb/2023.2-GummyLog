import db from "../database/db.js";

export const novoProduto = async ({skuId, unidadeDeEstoqueId}) => {
    try {
        return await db.query(`
            INSERT INTO produtos (sku_id, unidade_de_estoque_id)
            VALUES ($1, $2)
            `, [skuId, unidadeDeEstoqueId]);
    } catch (error) {
        throw new Error(error);
    }
}

export const buscaProduto = async ({ nome, marcaId, unidadeDeArmazenamento, dataInicio, dataFim }) => {
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