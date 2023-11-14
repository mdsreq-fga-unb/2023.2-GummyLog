import { Router } from "express";
import marcasRouter from "./marcasRouter.js";
import unidadeDeArmazenamentoRouter from "./unidadeDeArmazenamentoRouter.js";
import SKURouter  from "./SKURouter.js";

const router = Router();

router.use(marcasRouter);
router.use(unidadeDeArmazenamentoRouter);
router.use(SKURouter);

export default router; 