import db from "../../src/database/db";

export const novoProduto = async () => {
    const dados = {
        skuId: 1,
        unidadeDeEstoqueId: 2,
        quantidade: 15
    };

    await db.query(`INSERT INTO produtos (sku_id, unidade_de_estoque_id, quantidade) 
        VALUES ($1, $2, $3)`, [dados.skuId, dados.unidadeDeEstoqueId, dados.quantidade]);

        return dados;
}