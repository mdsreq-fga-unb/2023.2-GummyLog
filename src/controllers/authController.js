import * as authServices from "../services/authServices.js";

export const cadastraUsuario = async (req, res) => {
    const data = req.body;

    try {
        const ans = await authServices.cadastraUsuario(data);
        return res.status(ans.response).send(ans.message);

    } catch (error) {
        throw new Error(error);
    }
}
