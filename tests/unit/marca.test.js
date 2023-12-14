import * as marcaFactory from "../factories/marcaFactory.js"; 
import * as marcaService from "../../src/services/marcasServices.js";
import db from "../../src/database/db.js";

describe("Suit de teste de marca", ()=> {
    it("Deve adicionar uma nova marca no banco de dados", async () => {
        const nome = "Ursinho Pooh";
        await marcaService.novaMarca({nome});
        const resultado = await db.query(`SELECT * FROM marcas WHERE nome = $1`, [nome]);
        expect(resultado.rowCount).toBe(1);
    });

    it("Não pode adicionar uma marca duplicada", async () => {
        marcaFactory.criarMarca("Tigrao");
        const resultado = await marcaService.novaMarca({nome: "Tigrao"});
        expect(resultado.response).toBe(409);
    });
});