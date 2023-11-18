import { Router } from "express";
import * as produtosController from "../controllers/produtosController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import produtoSchema from "../schemas/produtoSchema.js";

const produtoRouter = Router();

produtoRouter.get("/busca-produto", produtosController.buscaProduto);

produtoRouter.post("/novo-produto", validateSchemaMiddleware(produtoSchema), produtosController.novoProduto);
produtoRouter.post("/atualiza-produto", produtosController.atualizaProduto);

export default produtoRouter;