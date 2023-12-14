import { batizaOrdemDeVenda } from "../../src/helpers/vendaHelper.js";
import * as vendasService from "../../src/services/vendaService.js";
import db from "../../src/database/db.js";

beforeAll(async () => {
    await db.query(`TRUNCATE TABLE produtos RESTART IDENTITY CASCADE;`);
    await db.query(`TRUNCATE TABLE "SKUs" RESTART IDENTITY CASCADE;`);
    await db.query(`TRUNCATE TABLE unidade_de_estoque RESTART IDENTITY CASCADE;`);
    await db.query(`TRUNCATE TABLE marcas RESTART IDENTITY CASCADE;`);
    await db.query(`TRUNCATE TABLE produtos RESTART IDENTITY CASCADE;`);
    await db.query(`TRUNCATE TABLE vendas RESTART IDENTITY CASCADE`);

    await db.query(`INSERT INTO marcas (nome) VALUES ($1)`, ['Nike']);
    await db.query(`INSERT INTO unidade_de_estoque (nome, endereco) VALUES ($1, $2)`, ['casa do Salazar', 'Talvez seja em Lima']);
    await db.query(`INSERT INTO "SKUs" (sku_name, nome, marca_id, descricao) VALUES ($1, $2, $3, $4)`, ['NIK1234TEN', 'Tenis', 1, 'você calça ele']);
    await db.query(`INSERT INTO produtos (sku_id, unidade_de_estoque_id, quantidade) VALUES ($1, $2 , $3);`, [1, 1, 15]);
});
describe("Suite de testes de vendas", () => {
    it("Deve gerar um número de ordem de venda com 10 dígitos", async () => {
        const ordemDeVenda = batizaOrdemDeVenda();
        expect(ordemDeVenda.toString().length === 10).toBe(true);
    });

    it("Deve criar uma nova venda", async () => {
        const body = {
            quantidadeVendida: 2,
            enderecoCliente: "acolá!",
            nomeCliente: "Junior",
            skuId: 1,
            preco: 7890
        };

        const resposta = await vendasService.vendeProduto(body);

        expect(resposta.response).toBe(201)
    });

    it("A quantidade de um produto vendido não pode superar o estoque", async () => {
        const body = {
            quantidadeVendida: 123786,
            enderecoCliente: "acolá!",
            nomeCliente: "Junior",
            skuId: 1,
            preco: 7890
        };

        const resposta = await vendasService.vendeProduto(body);

        expect(resposta.response).toBe(403);
    });

    it("Deve retornar as vendas", async () => {
        await db.query(`INSERT INTO vendas (ordem_de_venda, sku_id, endereco_cliente, nome_cliente, quantidade)
                        VALUES ($1, $2, $3, $4, $5)`,
            ["1234567890", 1, 'ali pô', 'Amaral', 2]);
        const busca = await vendasService.buscaVenda({ ordemDeVenda: "1234567890" });
        expect(busca.response).toBe(200);
    });

    it("Deve retornar um erro ao não encontrar uma venda", async () => {
        const busca = await vendasService.buscaVenda({ ordemDeVenda: "2138902435" });
        expect(busca.response).toBe(404);
    });

    it("Deve atualizar o status de uma venda", async () => {
        await db.query(`INSERT INTO vendas (ordem_de_venda, sku_id, endereco_cliente, nome_cliente, quantidade)
                        VALUES ($1, $2, $3, $4, $5)`,
            ["8792345670", 1, 'ali pô', 'Hauedy', 1]);
        await vendasService.atualizaVenda({novoStatus: "Entregue", ordemDeVenda: "8792345670"});
        const busca = await db.query(`SELECT * FROM vendas WHERE ordem_de_venda = '8792345670'`);
        expect(busca.rows[0].status_pedido).toBe("Entregue");
    });
});