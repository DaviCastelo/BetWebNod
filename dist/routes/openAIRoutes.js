"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const openAIController_1 = require("../controllers/openAIController");
const router = (0, express_1.Router)();
router.post("/schedule", openAIController_1.getSchedule);
router.post("/news", openAIController_1.getNews);
exports.default = router;
