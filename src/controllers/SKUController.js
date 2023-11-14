import * as SKUServices from "../services/SKUServices.js";

export const novoSKU = async (req, res) => {
    const data = req.body;
    try {
        const ans = await SKUServices.novoSKU(data);
        return res.send(ans.message).status(ans.response);
    } catch (error) {
        throw new Error(error);
    }
}