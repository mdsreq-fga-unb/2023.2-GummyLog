import { Router } from "express";
import * as SKUController from "../controllers/SKUController.js";
import SKUSchema from "../schemas/SKUSchema.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";

const SKURouter = Router();

SKURouter.post("/novo-sku", validateSchemaMiddleware(SKUSchema), SKUController.novoSKU);
SKURouter.get("/busca-sku", SKUController.buscaSKU);
SKURouter.post("/filtrar-sku", SKUController.filtraSKU);

export default SKURouter;