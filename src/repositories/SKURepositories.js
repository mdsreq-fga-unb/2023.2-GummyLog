import db from "../database/db.js";

export const novoSKU = async (data) => {
    try {
        return await db.query(`
            INSERT INTO "SKUs" (sku_name, nome, marca_id, descricao, ultimo_abastecimento)
            VALUES ($1, $2, $3, $4, current_timestamp)
            `, [data.skuNome, data.nome, data.marcaId, data.descricao]);
    } catch (error) {
        throw new Error(error);
    }
}

export const buscaSKU = async ({ id, nome, marcaId, skuNome, dataInicio, dataFim, skuId }) => {
    try {
        let query = `SELECT * FROM "SKUs"`;
        const values = [];

        if (id || nome || marcaId || skuNome || skuId || (dataInicio && dataFim)) {
            query += ` WHERE`;
        }

        if (skuId) {
            values.push(skuId);
            query += `${values.length > 1 ? "AND" : ""} sku_id = $${values.length}`
        }
        if (id) {
            values.push(id);
            query += `${values.length > 1 ? "AND" : ""} id = $${values.length}`
        }
        if (skuNome) {
            values.push(skuNome);
            query += ` ${values.length > 1 ? "AND" : ""} sku_name = $${values.length}`
        }
        if (marcaId) {
            values.push(marcaId);
            query += ` ${values.length > 1 ? "AND" : ""} marca_id = $${values.length}`;
        }

        if (nome) {
            values.push(nome);
            query += ` ${values.length > 1 ? "AND" : ""} nome = $${values.length}`;
        }

        if (dataInicio && dataFim) {
            values.push(dataInicio, dataFim);
            query += ` ${values.length > 2 ? "AND" : ""} ultimo_abastecimento BETWEEN $${values.length - 1} AND $${values.length}`;
        }
        const result = await db.query(query, values);
        console.log(query);
        return result.rows;

    } catch (error) {
        throw new Error(error);
    }
}