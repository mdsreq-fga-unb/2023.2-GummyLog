import { Router } from "express";
import marcasRouter from "./marcasRouter.js";
import unidadeDeArmazenamentoRouter from "./unidadeDeArmazenamentoRouter.js";
import SKURouter  from "./SKURouter.js";
import { healthCheck } from "../controllers/healthController.js";

const router = Router();

router.use(marcasRouter);
router.use(unidadeDeArmazenamentoRouter);
router.use(SKURouter);
router.use(healthCheck);

export default router; 