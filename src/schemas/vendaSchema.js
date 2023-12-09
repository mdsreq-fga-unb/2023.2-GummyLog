import joi from "joi";

const vendaSchema = joi.object({
    quantidadeVendida: joi.number().required(),
    enderecoCliente: joi.string().required(),
    nomeCliente: joi.string().required()
});

export default vendaSchema;