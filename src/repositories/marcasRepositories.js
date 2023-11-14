import db from "../database/db.js";

export const novaMarca = async (data) => {
    try {
        return await db.query(`INSERT INTO marcas (nome) VALUES ($1)`, [data.nome]);
    } catch (error) {
        throw new Error(error);
    }

};

export const procurarMarca = async (data) => {
    try {
        return await db.query(`SELECT * FROM marcas WHERE nome = $1`, [data.nome]);
    } catch (error) {
        throw new Error(error);
    }
};

export const procurarMarcaPorId = async (data) => {
    try {
        return await db.query(`SELECT * FROM marcas WHERE id = $1`, [data.id]);
    } catch (error) {
        throw new Error(error);
    }
}