

import { Router } from "express";
import { HealthController } from "../controllers/health.controller";


const router = Router();

router.use('/health', HealthController.status.bind(HealthController));

export default router;