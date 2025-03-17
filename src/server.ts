import cors from "cors";
import dotenv from "dotenv";
import apiRoutes from "./routes/apiRoutes";
import express from "express";
import openAIRoutes from "./routes/openAIRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:8080",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/api", apiRoutes);
app.use("/api/footystats", apiRoutes);
app.use("/api/openai", openAIRoutes);

app.use(cors());

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
