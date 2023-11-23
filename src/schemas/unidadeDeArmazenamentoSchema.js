import joi from "joi";

const unidadeDeArmazenamentoSchema = joi.object({
    nome: joi.string().required(),
    endereco: joi.string().required()
});

export default unidadeDeArmazenamentoSchema;