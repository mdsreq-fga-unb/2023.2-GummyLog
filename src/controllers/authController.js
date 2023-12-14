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


export const logaUsuario = async (req, res) => {
    const data = req.body;
    
    try {
        const ans = await authServices.logaUsuario(data);
        return res.status(ans.response).send({ message: ans.message, token: ans.token });
    } catch (error) {
        throw new Error(error);
    }
}

export const recuperaSenha = async (req, res) => {
    const data = req.body;

    try {
        const ans = await authServices.recuperaSenha(data);
        return res.status(ans.response).send(ans.message);
    } catch (error) {
        throw new Error(error);
    }
}

export const trocaSenha = async (req, res) => {
    const data = req.body;

    try {
        const ans = await authServices.trocaSenha(data);
        return res.status(ans.response).send(ans.message);
    } catch (error) {
        throw new Error(error);
    }
}