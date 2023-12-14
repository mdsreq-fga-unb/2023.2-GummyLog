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

export const buscaProduto = async ({ id, skuId, unidadeDeEstoqueId }) => {
    try {
        let query = `SELECT produtos.id, "SKUs".sku_name AS "SKU", "SKUs".nome AS nome, "unidade_de_estoque".nome AS "unidade_de_estoque", produtos.quantidade  FROM produtos`;
        query += ` JOIN "SKUs" ON produtos.sku_id = "SKUs".id JOIN "unidade_de_estoque" ON produtos.unidade_de_estoque_id = "unidade_de_estoque".id`
        const values = [];
        if (id || skuId || unidadeDeEstoqueId) {
            query += ` WHERE`;
        }

        if (id) {
            values.push(id);
            query += ` ${values.length > 1 ? "AND" : ""} produtos.id = $${values.length}`;
        }

        if (skuId) {
            values.push(skuId);
            query += ` ${values.length > 1 ? "AND" : ""} sku_id = $${values.length}`;
        }

        if (unidadeDeEstoqueId) {
            values.push(unidadeDeEstoqueId);
            query += ` ${values.length > 1 ? "AND" : ""} produtos.unidade_de_estoque_id = $${values.length}`;
        }
        const result = await db.query(query, values);
        return result.rows;

    } catch (error) {
        throw new Error(error);
    }
}

export const atualizaProduto = async ({ quantidade, unidadeDeEstoqueId, skuId }) => {
    try {
        return await db.query(`
            UPDATE produtos SET quantidade = $1 WHERE unidade_de_estoque_id = $2 AND sku_id = $3;
        `
            , [quantidade, unidadeDeEstoqueId, skuId]);
    } catch (error) {
        throw new Error(error);
    }
}

export const verificaEstoqueProduto = async () => {
    try {
        const produtos = await db.query(`SELECT id, unidade_de_estoque_id FROM produtos WHERE quantidade < 5`);
        return produtos.rows;
    } catch (error) {
        throw new Error(error);
    }
}

export const buscarQuantidadeDeUmProduto = async ({id}) => {
    try {
        const resultadoDaQuery = await db.query(`SELECT SUM(quantidade) FROM produtos
                                                 join "SKUs" on produtos.sku_id = "SKUs".id  
                                                 WHERE "SKUs".id=$1;`, [id]);
        return resultadoDaQuery.rows;
    } catch (error) {
        throw new Error(error);
    }
}

export const emailNotificacao = async ({email}) => {
    try {
        let verificaEmail = await db.query(`SELECT * FROM email_notificacao`);
        if (verificaEmail.rowCount > 0) {
            return await atualizaEmailNotificacao(email);
        }
        return await db.query(`INSERT INTO email_notificacao (email) VALUES ($1)`, [email])

    } catch (error) {
        throw new Error(error);
    }
}

export const atualizaEmailNotificacao = async (email) => {
    try {
        return await db.query(`UPDATE email_notificacao set email = $1 WHERE id = 1`, [email]);
    } catch (error) {
        throw new Error(error);
    }
}