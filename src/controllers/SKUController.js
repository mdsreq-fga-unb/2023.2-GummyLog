import * as SKUServices from "../services/SKUServices.js";


export const novoSKU = async (req, res) => {
    const data = req.body;
    try {
        const ans = await SKUServices.novoSKU({...data});
        return res.status(ans.response).send(ans.message);
    } catch (error) {
        throw new Error(error);
    }
}

export const buscaSKU =  async (req, res) => {
    const data = req.query;
    try {   
        const ans = await SKUServices.buscaSKU({...data});
        if (ans.length === 0){
            return res.status(404).json({ mensagem: "Nenhum SKU encontrado" });
        }
        res.json(ans)
        return res.json(ans.rows);
    } catch (error) {
        throw new Error(error);
    }
}