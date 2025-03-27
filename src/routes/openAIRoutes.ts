import { Router } from "express";
import { getSchedule, getNews } from "../controllers/openAIController";

const router = Router();

router.post("/schedule", getSchedule);
router.post("/news", getNews);

export default router;
