import joi from "joi";

const SKUSchema = joi.object({
    nome: joi.string().required().min(3).max(30),
    marcaId: joi.number().required(),
    unidadeDeEstoqueId: joi.number().required(),
    descricao: joi.string().max(140)
});

export default SKUSchema;