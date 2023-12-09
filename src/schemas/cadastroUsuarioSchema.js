import joi from "joi";

const cadastroUsuarioSchema = joi.object({
    nome: joi.string().required(),
    email: joi.string().required(),
    senha: joi.string().required(),
    confirmaSenha: joi.string().required()
});

export default cadastroUsuarioSchema;