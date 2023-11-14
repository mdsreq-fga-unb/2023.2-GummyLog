import { Router } from "express";
import * as marcasController from  "../controllers/marcasController.js";
import marcasSchema from "../schemas/marcasSchema.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";

const marcasRouter = Router();

marcasRouter.post("/nova-marca", validateSchemaMiddleware(marcasSchema), marcasController.novaMarca);

export default marcasRouter;