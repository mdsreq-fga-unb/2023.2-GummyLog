import * as unidadeDeArmazenamentoRepositories from "../repositories/unidadeDeArmazenamentoRepositories.js"; 
export const novaUnidadeDeArmazenamento = async ({nome, endereco}) => {
    try {
        const existe = await unidadeDeArmazenamentoRepositories.procurarUnidadeDeArmazenamento({nome});
        if (existe.rowCount > 0) return {response: 409, message: "Endereço já Cadastrado"}; 
        await unidadeDeArmazenamentoRepositories.novaUnidadeDeArmazenamento({nome, endereco});  
        return {response: 201, message: "Endereço Cadastrado"};
    } catch (error) {
        throw new Error(error);
    }
}