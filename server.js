const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(cors());

const API_URL = "https://api.football-data-api.com/test-call";
const API_KEY = "2bb729a891a7473479b3cadd545e25bb688a45b41cfa29f";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL, {
      params: { key: API_KEY },
    });
    
    res.json(response.data);
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);
    res.status(500).json({ error: "Erro ao obter dados da API" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
