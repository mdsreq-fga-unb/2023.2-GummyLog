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

        return res.status(ans.response).send({ payload: ans.payload });
    } catch (error) {
        throw new Error(error);
    }
}