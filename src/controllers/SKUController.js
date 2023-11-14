import * as SKUServices from "../services/SKUServices.js";

export const novoSKU = async (req, res) => {
    const data = req.body;
    try {
        const ans = await SKUServices.novoSKU(data);
        return res.status(ans.response).send(ans.message);
    } catch (error) {
        throw new Error(error);
    }
}

export const buscaSKU = async (req, res) => {
    try {
        const ans = await SKUServices.carregarTodosSKU()
        return res.json(ans.rows);
    } catch (error) {
        throw new Error(error);
    }
}

export const filtraSKU = async (req, res) => {
    const data = req.body;

    try {

        const { nome, marcaId, unidadeDeArmazenamento, dataInicio, dataFim } = data;
        const ans = await SKUServices.filtrarSKU(nome, marcaId, unidadeDeArmazenamento, dataInicio, dataFim);

        if (ans.rows.length === 0){
            return res.status(404).json({ mensagem: "Nenhum produto encontrado" });
        }

        return res.json(ans.rows);
    } catch (error) {
        throw new Error(error);
    }
}