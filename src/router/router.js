import { Router } from "express";
import healthRouter from "./healthRouter.js";

const router = Router();

router.use(healthRouter);

export default router;