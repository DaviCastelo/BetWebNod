"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const apiRoutes_1 = __importDefault(require("./routes/apiRoutes"));
const express_1 = __importDefault(require("express"));
const openAIRoutes_1 = __importDefault(require("./routes/openAIRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)({
    origin: "http://localhost:8080",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express_1.default.json());
app.use("/api", apiRoutes_1.default);
app.use("/api/footystats", apiRoutes_1.default);
app.use("/api/openai", openAIRoutes_1.default);
app.use((0, cors_1.default)());
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});
