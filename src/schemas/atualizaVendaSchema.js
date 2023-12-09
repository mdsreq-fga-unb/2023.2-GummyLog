import joi from "joi";

const atualizaVendaSchema = joi.object({
    ordemDeVenda: joi.number().required(),
    novoStatus: joi.string().required()
});

export default atualizaVendaSchema;