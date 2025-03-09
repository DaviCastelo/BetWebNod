import dotenv from "dotenv";

dotenv.config();

export const API_URL = process.env.API_URL_FOOTYSTATS || "";
export const API_KEY = process.env.API_KEY_FOOTYSTATS || "";
export const PORT = process.env.PORT || 3000;
