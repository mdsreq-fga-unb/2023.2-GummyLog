import { Router } from "express";
import * as produtosController from "../controllers/produtosController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import produtoSchema from "../schemas/produtoSchema.js";
import vendaSchema from "../schemas/vendaSchema.js";
import atualizaVendaSchema from "../schemas/atualizaVendaSchema.js";

const produtoRouter = Router();

produtoRouter.get("/busca-produto", produtosController.buscaProduto);

produtoRouter.post("/novo-produto", validateSchemaMiddleware(produtoSchema), produtosController.novoProduto);
produtoRouter.put("/atualiza-produto", validateSchemaMiddleware(produtoSchema), produtosController.atualizaProduto);
produtoRouter.post("/realiza-venda", validateSchemaMiddleware(vendaSchema), produtosController.vendeProduto);
produtoRouter.get("/vendas",  produtosController.buscaVenda);
produtoRouter.put("/atualiza-venda", validateSchemaMiddleware(atualizaVendaSchema), produtosController.atualizaVenda);

export default produtoRouter;