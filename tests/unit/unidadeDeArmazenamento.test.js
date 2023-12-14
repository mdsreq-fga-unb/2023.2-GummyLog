import * as unidadeDeArmazenamentoService from "../../src/services/unidadeDeArmazenamentoServices.js"
import db from "../../src/database/db.js";
import * as unidadeDeArmazenamentoFactory from "../factories/unidadeDeArmazenamentoFactory.js";

beforeAll(async ()=> {
    db.query(`TRUNCATE TABLE unidade_de_estoque RESTART IDENTITY CASCADE`);
});

describe("Suite de testes de unidade de armazenamento", () => {

    it("Deve adicionar uma nova unidade de armazenamento", async () => {
        const dadosDaUnidadeDeArmazenamento = {
            nome: "Casa do Salazar",
            endereco: "Acredito que fica em Lima - PE"
        };

        await unidadeDeArmazenamentoService.novaUnidadeDeArmazenamento({
            nome: dadosDaUnidadeDeArmazenamento.nome,
            endereco: dadosDaUnidadeDeArmazenamento.endereco
        });

        const verificacao = await db.query(`SELECT * FROM unidade_de_estoque WHERE nome=$1`,
            [dadosDaUnidadeDeArmazenamento.nome]);
        expect(verificacao.rowCount > 0).toBe(true);
    });

    it("Não pode adicionar uma unidade de armazenamento já existente", async () => {
        const dados = await unidadeDeArmazenamentoFactory.novaUnidadeDeArmazenamento();
        const verificacao = await unidadeDeArmazenamentoService.novaUnidadeDeArmazenamento({
            nome: dados.nome,
            endereco: dados.endereco
        });

        expect(verificacao.response).toBe(409);
    })
});