import db from "../database/db.js";

export const novaUnidadeDeArmazenamento = async (data) => {
    try {
        return await db.query(`INSERT INTO unidade_de_estoque (nome, endereco) VALUES ($1, $2)`, [data.nome, data.endereco]);
    } catch (error) {
        throw new Error(error);
    }
}

export const procurarUnidadeDeArmazenamento = async (data) => {
    try {
        return await db.query(`SELECT * FROM unidade_de_estoque WHERE nome = $1`, [data.nome]);
    } catch (error) {
        throw new Error(error);
    }
}