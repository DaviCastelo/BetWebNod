import cors from "cors";
import dotenv from "dotenv";
import apiRoutes from "./routes/apiRoutes";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", apiRoutes);
app.use("/api/footystats", apiRoutes);

app.use(cors());

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
