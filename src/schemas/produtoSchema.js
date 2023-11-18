import joi from "joi";

const produtoSchema = joi.object({
    skuId: joi.number().required(),
    unidadeDeEstoqueId: joi.number().required(),
    quantidade: joi.number().required()
});

export default produtoSchema;