import { Router } from "express";
import * as  unidadeDeArmazenamentoController from "../controllers/unidadeDeArmazenamentoController.js";
import unidadeDeArmazenamentoSchema from "../schemas/unidadeDeArmazenamentoSchema.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const unidadeDeArmazenamentoRouter = Router();

unidadeDeArmazenamentoRouter.post("/nova-unidade-de-armazenamento", authMiddleware, validateSchemaMiddleware(unidadeDeArmazenamentoSchema), unidadeDeArmazenamentoController.novaUnidadeDeArmazenamento);

export default unidadeDeArmazenamentoRouter;