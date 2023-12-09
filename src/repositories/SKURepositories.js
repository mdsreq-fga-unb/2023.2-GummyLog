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

export const buscaSKU = async ({ id, nome, marcaId, skuNome, dataInicio, dataFim}) => {
    try {
        let query = `SELECT "SKUs".id, sku_name, "SKUs".nome, marcas.nome AS marca, descricao, ultimo_abastecimento  FROM "SKUs"`;
        query += ` JOIN "marcas" ON "SKUs".marca_id = marcas.id`
        const values = [];
        if (id || nome || marcaId || skuNome || (dataInicio && dataFim)) {
            query += ` WHERE`;
        }
        if (id) {
            values.push(id);
            query += ` ${values.length > 1 ? "AND" : ""} "SKUs".id = $${values.length}`
        }
        if (skuNome) {
            values.push(skuNome);
            query += ` ${values.length > 1 ? "AND" : ""} "SKUs".sku_name = $${values.length}`
        }
        if (marcaId) {
            values.push(marcaId);
            query += ` ${values.length > 1 ? "AND" : ""} "SKUs".marca_id = $${values.length}`;
        }

        if (nome) {
            values.push(nome);
            query += ` ${values.length > 1 ? "AND" : ""} "SKUs".nome = $${values.length}`;
        }

        if (dataInicio && dataFim) {
            values.push(dataInicio, dataFim);
            query += ` ${values.length > 2 ? "AND" : ""} "SKUs".ultimo_abastecimento BETWEEN $${values.length - 1} AND $${values.length}`;
        }
        const result = await db.query(query, values);
        return result.rows;

    } catch (error) {
        throw new Error(error);
    }
}