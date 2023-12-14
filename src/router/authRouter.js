import { Router } from "express";
import cadastroUsuarioSchema from "../schemas/cadastroUsuarioSchema.js";
import logaUsuarioSchema from "../schemas/logaUsuarioSchema.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import * as authController from "../controllers/authController.js";


const authRouter = Router();

authRouter.post("/cadastra-usuario", validateSchemaMiddleware(cadastroUsuarioSchema), authController.cadastraUsuario);
authRouter.post("/loga-usuario", validateSchemaMiddleware(logaUsuarioSchema) , authController.logaUsuario);
authRouter.post("/recupera-senha", authController.recuperaSenha);
authRouter.post("/troca-senha", authController.trocaSenha)

export default authRouter;