"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNews = exports.getSchedule = void 0;
const openAIService_1 = require("../services/openAIService");
const getSchedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { prompt } = req.body;
    try {
        const data = yield (0, openAIService_1.getTeamOrLeagueSchedule)(prompt);
        res.json({ data });
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar a agenda na OpenAI" });
    }
});
exports.getSchedule = getSchedule;
const getNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { prompt } = req.body;
    try {
        const data = yield (0, openAIService_1.getTeamOrLeagueNews)(prompt);
        res.json({ data });
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar notícias na OpenAI" });
    }
});
exports.getNews = getNews;
