import joi from "joi";

const marcasSchema = joi.object({
    nome: joi.string().required()
});

export default marcasSchema;