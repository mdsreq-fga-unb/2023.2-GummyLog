import { Router } from "express";
import * as produtosController from "../controllers/produtosController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import produtoSchema from "../schemas/produtoSchema.js";
import vendaSchema from "../schemas/vendaSchema.js";
import atualizaVendaSchema from "../schemas/atualizaVendaSchema.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const produtoRouter = Router();

produtoRouter.get("/busca-produto", authMiddleware, produtosController.buscaProduto);

produtoRouter.post("/novo-produto", authMiddleware, validateSchemaMiddleware(produtoSchema), produtosController.novoProduto);
produtoRouter.put("/atualiza-produto", authMiddleware, validateSchemaMiddleware(produtoSchema), produtosController.atualizaProduto);
produtoRouter.put("/email-notificacao", produtosController.emailNotificacao);

export default produtoRouter;