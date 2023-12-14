import { Router } from "express";
import * as SKUController from "../controllers/SKUController.js";
import SKUSchema from "../schemas/SKUSchema.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const SKURouter = Router();

SKURouter.post("/novo-sku", authMiddleware, validateSchemaMiddleware(SKUSchema), SKUController.novoSKU);
SKURouter.get("/busca-sku", authMiddleware, SKUController.buscaSKU);

export default SKURouter;