// services/openAIService.ts
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const fetchOpenAIContent = async (prompt: string): Promise<string> => {
    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "user",
                content: prompt,
            },
        ],
    });

    const content = response.choices[0]?.message?.content?.trim();
    if (!content) {
        throw new Error("Resposta vazia da OpenAI");
    }

    return content;
};

export const getTeamOrLeagueSchedule = async (prompt: string): Promise<string> => {
    try {
        return await fetchOpenAIContent(`Forneça a agenda de jogos para: ${prompt}`);
    } catch (error) {
        console.error("Erro ao buscar a agenda na OpenAI:", error);
        throw new Error("Erro ao buscar a agenda na OpenAI");
    }
};

export const getTeamOrLeagueNews = async (prompt: string): Promise<string> => {
    try {
        return await fetchOpenAIContent(`Forneça as últimas notícias para: ${prompt}`);
    } catch (error) {
        console.error("Erro ao buscar notícias na OpenAI:", error);
        throw new Error("Erro ao buscar notícias na OpenAI");
    }
};
