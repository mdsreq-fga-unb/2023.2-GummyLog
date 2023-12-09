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
            query += ` ${values.length > 1 ? "AND" : ""} produtos.sku_id = $${values.length}`;
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


export const vendeProduto = async ({ quantidadeVendida, nomeCliente, enderecoCliente, ordemDeVenda, skuId }) => {
    try {
        const query = await db.query(`INSERT INTO vendas (ordem_de_venda, sku_id, endereco_cliente, nome_cliente, quantidade) VALUES ($1, $2, $3, $4, $5)`, [ordemDeVenda, skuId, enderecoCliente, nomeCliente, quantidadeVendida]);
        return query;
    } catch (error) {
        throw new Error(error);
    }
}

export const buscaVenda = async ({ ordemDeVenda, skuId, enderecoCliente, nomeCliente, dataVenda, statusPedido, id }) => {
    try {
        let query = `SELECT * FROM vendas`
        const values = [];

        if (ordemDeVenda || skuId || enderecoCliente || nomeCliente || dataVenda || statusPedido || id) {
            query += ` WHERE`;
        }

        if (ordemDeVenda) {
            values.push(ordemDeVenda);
            query += ` ${values.length > 1 ? "AND" : ""} ordem_de_venda = $${values.length}`;
        }
        if (skuId) {
            values.push(skuId);
            query += ` ${values.length > 1 ? "AND" : ""} sku_id = $${values.length}`;
        }
        if (enderecoCliente) {
            values.push(enderecoCliente);
            query += ` ${values.length > 1 ? "AND" : ""} endereco_cliente = $${values.length}`;
        }
        if (nomeCliente) {
            values.push(nomeCliente);
            query += ` ${values.length > 1 ? "AND" : ""} nome_cliente = $${values.length}`;
        }
        if (dataVenda) {
            values.push(dataVenda);
            query += ` ${values.length > 1 ? "AND" : ""} data_venda = $${values.length}`;
        }
        if (id) {
            values.push(id);
            query += ` ${values.length > 1 ? "AND" : ""} id = $${values.length}`;
        }
        if (statusPedido) {
            values.push(statusPedido);
            query += ` ${values.length > 1 ? "AND" : ""} status_pedido = $${values.length}`;
        }
        const result = await db.query(query, values);
        return result.rows;
    } catch (error) {
        throw new Error(error);
    }
}

export const atualizaVenda = async ({ novoStatus, ordemDeVenda }) => {
    try {
        return await db.query(`UPDATE vendas SET status_pedido = $1 WHERE ordem_de_venda = $2;`
        , [novoStatus, ordemDeVenda]);
        
    } catch (error) {
        throw new Error(error);
    }
}

export const verificaOrdemDeVenda = async (ordemDeVenda) => {
    try {

        return await db.query(`select * from vendas where ordem_de_venda = $1`, [ordemDeVenda]);
    } catch (error) {
        throw new Error(error);
    }
} 