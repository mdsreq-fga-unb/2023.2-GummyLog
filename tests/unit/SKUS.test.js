import { batizaSKU } from "../../src/helpers/SKUHelper";
import * as SKUService from "../../src/services/SKUServices.js"
import * as SKUFactory from "../factories/SKUFactory.js"
import db from "../../src/database/db.js"

beforeAll(async () => {
    await db.query(`TRUNCATE TABLE produtos RESTART IDENTITY CASCADE;`);
    await db.query(`TRUNCATE TABLE "SKUs" RESTART IDENTITY CASCADE;`);
    await db.query(`TRUNCATE TABLE unidade_de_estoque RESTART IDENTITY CASCADE;`);
    await db.query(`TRUNCATE TABLE marcas RESTART IDENTITY CASCADE;`);

    await db.query(`INSERT INTO marcas (nome) VALUES ('Nintendo Inc.');`);
    
});

describe("Suit de teste de SKU", () => {

    it("deve batizar um novo sku valido", () => {

        const SKURegex = /^[A-Z]{3}\d{4}[A-Z]{3}$/;
        const novoSku = batizaSKU({nome: "ursinho carinhoso", marca: "Carinhoso Inc."});
        expect(novoSku).toMatch(SKURegex);
    });

    it("o nome do sku deve ter os três dígitos da marca", () => {

        const novoSku = batizaSKU({nome: "ursinho raivoso", marca: "Raivoso Inc."});
        const digitosIniciais = novoSku.slice(0, 3);
        expect(digitosIniciais).toBe("RAI");
    });

    it("o nome do sku deve ter os quatro números aleatórios", () => {

        const numeros = /^\d{4}$/;
        const novoSku = batizaSKU({nome: "ursinho raivoso", marca: "Raivoso Inc."});
        const digitosMeio = novoSku.slice(3, 7);
        expect(digitosMeio).toMatch(numeros);
    });

    it("o nome do sku deve ter os três dígitos do novo produto", () => {

        const novoSku = batizaSKU({nome: "ursinho raivoso", marca: "Raivoso Inc."});
        const digitosFinais = novoSku.slice(7, 10);
        expect(digitosFinais).toBe("URS");
    });

    it("deve criar um novo sku", async () => {

        const skuData = {nome: "Coelho de pelucia", marcaId: 1, descricao: "Com certeza um conejo"};
        await SKUService.novoSKU(skuData);
        const resultado = await db.query(`SELECT * FROM "SKUs" WHERE nome = $1`, [skuData.nome]);
        expect(resultado.rowCount).toBe(1);
    });
    
    it("não pode adicionar um sku duplicado", async () => {
        const data = await SKUFactory.criarSKU();
        const resposta = await SKUService.novoSKU(data);
        expect(resposta.response).toBe(409);
    });
    
    it("deve encontrar um sku já criado", async () => {
        const data = await SKUFactory.criarSKU();
        const resposta = await SKUService.buscaSKU(data);
        expect(resposta.payload.length > 0).toBe(true);
    });
    
});

afterAll(async () => {
    await db.query(`TRUNCATE TABLE produtos RESTART IDENTITY CASCADE;`);
    await db.query(`TRUNCATE TABLE "SKUs" RESTART IDENTITY CASCADE;`);
    await db.query(`TRUNCATE TABLE unidade_de_estoque RESTART IDENTITY CASCADE;`);
    await db.query(`TRUNCATE TABLE marcas RESTART IDENTITY CASCADE;`);
});