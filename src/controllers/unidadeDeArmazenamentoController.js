import * as unidadeDeArmazenamentoServices from "../services/unidadeDeArmazenamentoServices.js";
export const novaUnidadeDeArmazenamento = async (req, res) => {
    const { nome, endereco } = req.body;
    try {
        const ans = await unidadeDeArmazenamentoServices.novaUnidadeDeArmazenamento({ nome, endereco });
        return res.status(ans.response).send(ans.message);
    } catch (error) {
        throw new Error(error);
    }
}