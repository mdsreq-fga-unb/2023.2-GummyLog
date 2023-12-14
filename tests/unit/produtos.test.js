import db from "../../src/database/db.js";
import * as produtosService from "../../src/services/produtosServices.js";
import * as produtoFactory from "../factories/produtoFactory.js";

beforeAll(async () => {
    await db.query(`TRUNCATE TABLE produtos RESTART IDENTITY CASCADE;`);
    await db.query(`TRUNCATE TABLE "SKUs" RESTART IDENTITY CASCADE;`);
    await db.query(`TRUNCATE TABLE unidade_de_estoque RESTART IDENTITY CASCADE;`);
    await db.query(`TRUNCATE TABLE marcas RESTART IDENTITY CASCADE;`);

    await db.query(`INSERT INTO marcas (nome) VALUES ($1)`, ['teste1']);
    await db.query(`INSERT INTO unidade_de_estoque (nome, endereco) VALUES ($1, $2)`,
        ['teste1nome', 'teste1endereco']);
    await db.query(`INSERT INTO unidade_de_estoque (nome, endereco) VALUES ($1, $2)`,
        ['teste2nome', 'teste2endereco']);
    await db.query(`
            INSERT INTO "SKUs" (sku_name, nome, marca_id, descricao, ultimo_abastecimento)
            VALUES ($1, $2, $3, $4, current_timestamp)
            `, ['TES2348URS', 'ursopooh', 1, 'um urso legal']);
}
);

describe("Suite de testes de produtos", () => {
    it("Deve criar um novo produto", async () => {
        const dados = {
            skuId: 1,
            unidadeDeEstoqueId: 1,
            quantidade: 15
        };
        await produtosService.novoProduto(dados);
        const response = await db.query(`SELECT * FROM produtos WHERE sku_id=$1`, [1]);
        expect(response.rowCount > 0).toBe(true);
    });

    it("Não deve criar um mesmo produto em uma mesma unidade de estoque", async () => {
        const novoProduto = await produtoFactory.novoProduto();

        const resposta = await produtosService.novoProduto(novoProduto);

        expect(resposta.response).toBe(409);
    });

    it("O SKU precisa existir para criar um produto dele" ,async () => {
        const dados = {
            skuId: 123,
            unidadeDeEstoqueId: 1,
            quantidade: 14
        }

        const resposta = await produtosService.novoProduto(dados);

        expect(resposta.response).toBe(404);
    });
});

afterAll(async () => {
    await db.query(`TRUNCATE TABLE produtos RESTART IDENTITY CASCADE;`);
    await db.query(`TRUNCATE TABLE "SKUs" RESTART IDENTITY CASCADE;`);
    await db.query(`TRUNCATE TABLE unidade_de_estoque RESTART IDENTITY CASCADE;`);
    await db.query(`TRUNCATE TABLE marcas RESTART IDENTITY CASCADE;`);
})