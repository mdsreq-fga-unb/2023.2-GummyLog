import * as produtosServices from "../services/produtosServices.js"

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
        const ans = await produtosServices.buscaProduto({...data});
        if (ans.length === 0){
            return res.status(404).json({ mensagem: "Nenhum produto encontrado" });
        }
        res.json(ans)
        return res.json(ans.rows);
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