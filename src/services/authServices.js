import * as authRepositories from "../repositories/authRepositories.js";

export const cadastraUsuario = async (data) => {
    try {
        const existeUsuario = await buscaUsuario({ email: data.email });
        if (existeUsuario.response === 200) {
            return { response: 409, message: "Usuario ja cadastrado"};
        }
        await authRepositories.cadastraUsuario({ ...data });
        return { response: 201, message: "Usuario Criado"};
    } catch (error) {
        throw new Error(error);
    }
}

export const buscaUsuario = async (data) => {
    try {
        const existeUsuario = await authRepositories.buscaUsuario({ email: data.email});
        if (existeUsuario.rowCount > 0) {
            return { reponse: 200, message: "Usuario ja cadastrado"};
        }
        return { response:404 , message: "Usuario nao encontrado "};
    } catch (error) {
        throw new Error(error);
    }
}