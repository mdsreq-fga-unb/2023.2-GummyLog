import { Router } from "express";
import * as healthController from "../controllers/healthCheckController.js";

const healthRouter = Router();

healthRouter.get('/healthz', healthController.healthCheck);

export default healthRouter;