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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeamOrLeagueNews = exports.getTeamOrLeagueSchedule = void 0;

const openai_1 = __importDefault(require("openai"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
const fetchOpenAIContent = (prompt) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const response = yield openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "user",
                content: prompt,
            },
        ],
    });
    const content = (_c = (_b = (_a = response.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.trim();
    if (!content) {
        throw new Error("Resposta vazia da OpenAI");
    }
    return content;
});
const getTeamOrLeagueSchedule = (prompt) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield fetchOpenAIContent(`Forneça a agenda de jogos para: ${prompt}`);
    }
    catch (error) {
        console.error("Erro ao buscar a agenda na OpenAI:", error);
        throw new Error("Erro ao buscar a agenda na OpenAI");
    }
});
exports.getTeamOrLeagueSchedule = getTeamOrLeagueSchedule;
const getTeamOrLeagueNews = (prompt) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield fetchOpenAIContent(`Forneça as últimas notícias para: ${prompt}`);
    }
    catch (error) {
        console.error("Erro ao buscar notícias na OpenAI:", error);
        throw new Error("Erro ao buscar notícias na OpenAI");
    }
});
exports.getTeamOrLeagueNews = getTeamOrLeagueNews;
