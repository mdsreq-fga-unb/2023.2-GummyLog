import {faker} from "@faker-js/faker";
import db from "../../src/database/db.js";

export const criarMarca = async (nomeDaMarca) => {
    const nome = nomeDaMarca || faker.company.name();
    return await db.query(`INSERT INTO marcas (nome) VALUES ($1)`, [nome]);
};