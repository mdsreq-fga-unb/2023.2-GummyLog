import {faker, sk} from "@faker-js/faker";
import db from "../../src/database/db.js";
import * as SKUHelper from "../../src/helpers/SKUHelper.js"

export const criarSKU = async () => {
    
    const nome = faker.animal.rabbit();
    const skuData = {nome, marcaId: 1, descricao: "Com certeza um coelho(inho)"};
    const nomeSKU = SKUHelper.batizaSKU({nome: skuData.nome, marca: "Ursinho Pooh"});
    skuData.skuNome = nomeSKU;
    await db.query(`
    INSERT INTO "SKUs" (sku_name, nome, marca_id, descricao, ultimo_abastecimento)
    VALUES ($1, $2, $3, $4, current_timestamp)
    `, [skuData.skuNome, skuData.nome, skuData.marcaId, skuData.descricao]);
    return skuData;
};