import { Request, Response } from "express";
import { getTeamOrLeagueSchedule, getTeamOrLeagueNews } from "../services/openAIService";

export const getSchedule = async (req: Request, res: Response) => {
    const { prompt } = req.body;
    try {
        const data = await getTeamOrLeagueSchedule(prompt);
        res.json({ data });
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar a agenda na OpenAI" });
    }
};

export const getNews = async (req: Request, res: Response) => {
    const { prompt } = req.body;
    try {
        const data = await getTeamOrLeagueNews(prompt);
        res.json({ data });
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar notícias na OpenAI" });
    }
};
