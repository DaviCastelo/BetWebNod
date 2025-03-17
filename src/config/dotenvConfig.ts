import dotenv from "dotenv";

dotenv.config();

export const API_URL: string = process.env.API_URL_FOOTYSTATS || "";
export const API_KEY: string = process.env.API_KEY_FOOTYSTATS || "";
export const OPENAI_API_KEY: string = process.env.OPENAI_API_KEY || "";
export const PORT: number = Number(process.env.PORT) || 3000;
