import db from "../database/db.js";

export const vendeProduto = async ({ quantidadeVendida, nomeCliente, enderecoCliente, ordemDeVenda, skuId, preco }) => {
    try {
        const query = await db.query(`INSERT INTO vendas (ordem_de_venda, sku_id, endereco_cliente, nome_cliente, quantidade, preco) VALUES ($1, $2, $3, $4, $5, $6)`, [ordemDeVenda, skuId, enderecoCliente, nomeCliente, quantidadeVendida, preco]);
        return query;
    } catch (error) {
        throw new Error(error);
    }
}

export const buscaVenda = async ({ ordemDeVenda, skuId, enderecoCliente, nomeCliente, dataVenda, statusPedido, id, preco }) => {
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
        if (preco) {
            values.push(preco);
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
        return await db.query(`SELECT * FROM vendas WHERE ordem_de_venda = $1`, [ordemDeVenda]);
    } catch (error) {
        throw new Error(error);
    }
} 