import { faker } from "@faker-js/faker";
import db from "../../src/database/db.js";

export const novaUnidadeDeArmazenamento = async () => {
    const dados = {
        nome: faker.person.firstName(),
        endereco: faker.location.streetAddress()
    };

    await db.query(`INSERT INTO unidade_de_estoque (nome, endereco) VALUES ($1, $2)`,
        [dados.nome, dados.endereco]);
    return dados;
};