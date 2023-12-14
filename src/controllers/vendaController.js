import * as vendasService from "../services/vendaService.js";

export const buscaVenda = async (req, res) => {
    const data = req.query;

    try {
        const ans = await vendasService.buscaVenda({ ...data });
        return res.status(ans.response).send({message: ans.message, payload: ans.payload});
    } catch (error) {
        throw new Error(error);
    }
}

export const vendeProduto = async (req, res) => {
    const data = req.body

    try {
        const ans = await vendasService.vendeProduto(data);
        return res.status(ans.response).send(ans.message);

    } catch (error) {
        throw new Error(error);
    }
}
export const atualizaVenda = async (req, res) => {
    const data = req.body
    try {
        const ans = await vendasService.atualizaVenda(data);
        return res.status(ans.response).send(ans.message);
    } catch (error) {
        throw new Error(error);
    }
}