import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import vendaSchema from "../schemas/vendaSchema.js";
import atualizaVendaSchema from "../schemas/atualizaVendaSchema.js";
import * as vendaController from "../controllers/vendaController.js"

const vendaRouter = Router();

vendaRouter.post("/realiza-venda", authMiddleware, validateSchemaMiddleware(vendaSchema), vendaController.vendeProduto);
vendaRouter.get("/vendas",  authMiddleware, vendaController.buscaVenda);
vendaRouter.put("/atualiza-venda", authMiddleware, validateSchemaMiddleware(atualizaVendaSchema), vendaController.atualizaVenda);

export default vendaRouter;