import axios from "axios";
import { API_KEY, API_URL } from "../config/dotenvConfig";

export const testConnection = async () => {
  try {
    const response = await axios.get(`${API_URL}/test-call?key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao testar a conexão com a API FootyStats:", error);
    throw error;
  }
};

export const getLeagues = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/league-list?key=${API_KEY}&chosen_leagues_only=true`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao obter a lista de ligas:", error);
  }
};

export const getCountry = async () => {
  try {
    const response = await axios.get(`${API_URL}/country-list?key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter a lista de países:", error);
  }
};

export const getTodayMatches = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/todays-matches?key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao obter a lista de jogos:", error);
  }
};

export const getLeagueSeason = async (seasonId: string) => {
  try {
    const BASE_URL = `${API_URL}/league-season?key=${API_KEY}&season_id=${seasonId}`;
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter dados da temporada:", error);
    throw new Error("Erro ao buscar temporada");
  }
};

export const getLeagueMatches = async (seasonId: string) => {
  try {
    const BASE_URL = `${API_URL}/league-matches?key=${API_KEY}&season_id=${seasonId}`;
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter partidas da liga:", error);
    throw new Error("Erro ao buscar temporada");
  }
};

export const getLeagueTeams = async (seasonId: number) => {
  try {
    const BASE_URL = `${API_URL}/league-teams?key=${API_KEY}&season_id=${seasonId}`;
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter dados dos times:", error);
    throw new Error("Erro ao buscar times");
  }
};

export const getLeaguePlayers = async (seasonId: string) => {
  try {
    const BASE_URL = `${API_URL}/league-players?key=${API_KEY}&season_id=${seasonId}&include=stats`;
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter dados dos jogadores:", error);
    throw new Error("Erro ao buscar times");
  }
};

export const getLeagueReferees = async (seasonId: string) => {
  try {
    const BASE_URL = `${API_URL}/league-referees?key=${API_KEY}&season_id=${seasonId}`;
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter dados dos árbitros:", error);
    throw new Error("Erro ao buscar times");
  }
};

export const getIndividualTeam = async (teamId: string) => {
  try {
    const BASE_URL = `${API_URL}/team?key=${API_KEY}&team_id=${teamId}`;
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter dados dos do time:", error);
    throw new Error("Erro ao buscar times");
  }
};

export const getLastStatsTeam = async (teamId: string) => {
  try {
    const BASE_URL = `${API_URL}/lastx?key=${API_KEY}&team_id=${teamId}`;
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter dados das estatistica do time:", error);
    throw new Error("Erro ao buscar times");
  }
};

export const getMatchDetails = async (matchId: string) => {
  try {
    const BASE_URL = `${API_URL}/match?key=${API_KEY}&match_id=${matchId}`;
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter dados das estatistica da partida:", error);
    throw new Error("Erro ao buscar times");
  }
};

export const getLeagueTable = async (seasonId: string) => {
  try {
    const BASE_URL = `${API_URL}/league-tables?key=${API_KEY}&season_id=${seasonId}`;
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter dados das tabela da liga:", error);
    throw new Error("Erro ao buscar times");
  }
};

export const getPlayer = async (playerId: string) => {
  try {
    const BASE_URL = `${API_URL}/player-stats?key=${API_KEY}&player_id=${playerId}`;
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter dados do jogador:", error);
    throw new Error("Erro ao buscar times");
  }
};

export const getReferee = async (refereeId: string) => {
  try {
    const BASE_URL = `${API_URL}/referee?key=${API_KEY}&referee_id=${refereeId}`;
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter dados do árbitro:", error);
    throw new Error("Erro ao buscar times");
  }
};

export const getOdd2Dot5 = async () => {
  try {
    const BASE_URL = `${API_URL}/stats-data-over25?key=${API_KEY}`;
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao obter odds");
  }
};

export const BTTSStats = async () => {
  try {
    const BASE_URL = `${API_URL}/stats-data-btts?key=${API_KEY}`;
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error("Error BTTS");
  }
};
