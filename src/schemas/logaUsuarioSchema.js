import joi from "joi";

const logaUsuarioSchema = joi.object({
    email: joi.string().required(),
    senha: joi.string().required()
});


export default logaUsuarioSchema;