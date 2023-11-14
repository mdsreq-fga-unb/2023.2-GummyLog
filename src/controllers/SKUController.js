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
    } catch (error) {
        throw new Error(error)
    }
}