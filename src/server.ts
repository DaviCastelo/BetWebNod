import cors from "cors";
import dotenv from "dotenv";
import apiRoutes from "./routes/apiRoutes";
import express from "express";
import openAIRoutes from "./routes/openAIRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//app.use(
  //cors({
    //origin: "*",
    //methods: ["GET", "POST", "PUT", "DELETE"],
    //allowedHeaders: ["Content-Type", "Authorization"],
  //})
//);
app.use(
  cors({
    origin: ["front-bets-git-main-davicastelos-projects.vercel.app", "http://172.28.16.1:8080","0.0.0.0","front-bets.vercel.app","https://front-bets-davicastelos-projects.vercel.app/","https://front-bets-jvn165di1-davicastelos-projects.vercel.app/"],// Permite qualquer origem
    methods: ["GET", "POST", "PUT", "DELETE"],// Permite todos os métodos HTTP
    allowedHeaders:["Content-Type", "Authorization"], // Permite todos os cabeçalhos
    //exposedHeaders: "*", // Expõe todos os cabeçalhos na resposta
    //credentials: true, // Permite credenciais (cookies, auth headers)
    //maxAge: 86400, // Cache de CORS por 24 horas
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
