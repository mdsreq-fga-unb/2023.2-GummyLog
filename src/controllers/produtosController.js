import * as produtosServices from "../services/produtosServices.js";

export const novoProduto = async (req, res) => {
    const data = req.body;

    try {
        const ans = await produtosServices.novoProduto(data);
        return res.status(ans.response).send(ans.message);
    } catch (error) {
        throw new Error(error);
    }
}

export const buscaProduto = async (req, res) => {
    const data = req.query;

    try {
        const ans = await produtosServices.buscaProduto({ ...data });
        return res.status(ans.response).send({ message: ans.message, payload: ans.payload });
    } catch (error) {
        throw new Error(error);
    }
}

export const atualizaProduto = async (req, res) => {
    const data = req.body;

    try {
        const ans = await produtosServices.atualizaProduto(data);
        return res.status(ans.response).send(ans.message);
    } catch (error) {
        throw new Error(error);
    }
}

export const emailNotificacao = async (req, res) => {
    const data = req.body;
    
    try {
        const ans = await produtosServices.emailNotificacao(data);
        return ans = res.status(ans.response).send(ans.message);
    } catch (error) {
        throw new Error(error);
    }
}