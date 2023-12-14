import { Router } from "express";
import marcasRouter from "./marcasRouter.js";
import unidadeDeArmazenamentoRouter from "./unidadeDeArmazenamentoRouter.js";
import SKURouter from "./SKURouter.js";
import healthRouter from "./healthRouter.js";
import produtosRouter from "../router/produtosRouter.js";
import authRouter from "./authRouter.js";
import vendaRouter from "./vendaRouter.js";

const router = Router();

router.use(marcasRouter);
router.use(unidadeDeArmazenamentoRouter);
router.use(SKURouter);
router.use(healthRouter);
router.use(produtosRouter);
router.use(authRouter);
router.use(vendaRouter);

export default router; 
