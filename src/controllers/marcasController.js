import * as marcasServices from "../services/marcasServices.js";

export const novaMarca = async (req, res) => {
    const {nome} = req.body;
    try{
        const ans = await marcasServices.novaMarca({nome});
        return res.status(ans.response).send(ans.message);
    } catch (error){
        throw new Error(error);
    }
};