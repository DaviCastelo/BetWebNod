"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.OPENAI_API_KEY = exports.API_KEY = exports.API_URL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.API_URL = process.env.API_URL_FOOTYSTATS || "";
exports.API_KEY = process.env.API_KEY_FOOTYSTATS || "";
exports.OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
exports.PORT = Number(process.env.PORT) || 3000;
