import { Router } from "express";
import * as marcasController from  "../controllers/marcasController.js";
import marcasSchema from "../schemas/marcasSchema.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const marcasRouter = Router();

marcasRouter.post("/nova-marca", authMiddleware, validateSchemaMiddleware(marcasSchema), marcasController.novaMarca);

export default marcasRouter;