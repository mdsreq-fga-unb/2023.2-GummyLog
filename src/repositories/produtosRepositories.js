import db from "../database/db.js";

export const novoProduto = async ({ skuId, unidadeDeEstoqueId, quantidade }) => {
    try {
        return await db.query(`
            INSERT INTO produtos (sku_id, unidade_de_estoque_id, quantidade)
            VALUES ($1, $2, $3)
            `, [skuId, unidadeDeEstoqueId, quantidade]);
    } catch (error) {
        throw new Error(error);
    }
}

export const buscaProduto = async ({ id, skuId, unidadeDeEstoqueId}) => {
    try {
        let query = `SELECT * FROM produtos`;
        const values = [];
        if (id || skuId || unidadeDeEstoqueId || quantidade) {
            query += ` WHERE`;
        }

        if (id) {
            values.push(id);
            query += ` ${values.length > 1 ? "AND" : ""} id = $${values.length}`;
        }

        if (skuId) {
            values.push(skuId);
            query += ` ${values.length > 1 ? "AND" : ""} sku_id = $${values.length}`;
        }

        if (unidadeDeEstoqueId) {
            values.push(unidadeDeEstoqueId);
            query += ` ${values.length > 1 ? "AND" : ""} unidade_de_estoque_id = $${values.length}`;
        }
        
        const result = await db.query(query, values);
        return result.rows;

    } catch (error) {
        throw new Error(error);
    }
}

export const atualizaProduto = async ({ quantidade, unidadeDeEstoqueId, skuId }) => {
    try {
        console.log(quantidade, unidadeDeEstoqueId, skuId);
        if (!quantidade || !unidadeDeEstoqueId || !skuId) {
            return { response: 404, message:"Todos os campos são obrigatorios" }
        }
        return await db.query(`
        UPDATE produtos SET quantidade = $1 WHERE unidade_de_estoque_id = $2 AND sku_id = $3`
        , [quantidade, unidadeDeEstoqueId, skuId]);
    } catch (error) {
        throw new Error(error);
    }
}