import { Router } from "express";
import * as SKUController from "../controllers/SKUController.js";
import SKUSchema from "../schemas/SKUSchema.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";

const SKURouter = Router();

SKURouter.post("/novo-sku", validateSchemaMiddleware(SKUSchema), SKUController.novoSKU);

export default SKURouter;