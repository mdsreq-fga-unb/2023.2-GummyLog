import * as marcasRepositories from "../repositories/marcasRepositories.js";

export const novaMarca = async ({ nome }) => {
    try {
        const existe = await marcasRepositories.procurarMarca({ nome });
        if (existe.rowCount > 0) return { response: 409, message: "Marca já existe" };

        await marcasRepositories.novaMarca({ nome });
        return { response: 201, message: "Marca Cadastrada" };
    } catch (error) {
        throw new Error(error);
    }
};
