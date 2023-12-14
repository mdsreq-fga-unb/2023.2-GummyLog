import joi from "joi";

const vendaSchema = joi.object({
    quantidadeVendida: joi.number().required(),
    enderecoCliente: joi.string().required(),
    nomeCliente: joi.string().required(),
    skuId: joi.number().required(),
    preco: joi.number().required()
});

export default vendaSchema;