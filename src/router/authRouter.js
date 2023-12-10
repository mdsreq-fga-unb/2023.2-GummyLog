import { Router } from "express";
import cadastroUsuarioSchema from "../schemas/cadastroUsuarioSchema.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import * as authController from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/cadastra-usuario", validateSchemaMiddleware(cadastroUsuarioSchema), authController.cadastraUsuario);

export default authRouter;