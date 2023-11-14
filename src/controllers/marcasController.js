import * as marcasServices from "../services/marcasServices.js";

export const novaMarca = async (req, res) => {
    const {nome} = req.body;
    try{
        const ans = await marcasServices.novaMarca({nome});
        return res.send(ans.message).status(ans.response);
    } catch (error){
        throw new Error(error);
    }
};