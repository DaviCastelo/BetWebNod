import { Request, Response } from "express";
import {
  BTTSStats,
  getCountry,
  getIndividualTeam,
  getLastStatsTeam,
  getLeagueMatches,
  getLeaguePlayers,
  getLeagueReferees,
  getLeagues,
  getLeagueSeason,
  getLeagueTable,
  getLeagueTeams,
  getMatchDetails,
  getOdd2Dot5,
  getPlayer,
  getReferee,
  getTodayMatches,
  testConnection,
} from "../services/apiService";

export const testApiConnection = async (req: Request, res: Response) => {
  try {
    const data = await testConnection();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erro ao conectar à API FootyStats",
    });
  }
};

export const listLeagues = async (req: Request, res: Response) => {
  try {
    const leagues = await getLeagues();
    res.json(leagues);
  } catch (error) {
    console.error("Erro ao obter a lista de ligas:", error);
    res.status(500).json({ success: false, message: "Erro ao buscar ligas" });
  }
};

export const listCountry = async (req: Request, res: Response) => {
  try {
    const country = await getCountry();
    res.json(country);
  } catch (error) {
    console.error("Erro ao obter o país:", error);
    res.status(500).json({ success: false, message: "Erro ao buscar país" });
  }
};

export const listTodayMatches = async (req: Request, res: Response) => {
  try {
    const matches = await getTodayMatches();
    res.json(matches);
  } catch (error) {
    console.error("Erro ao obter o partidas:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao buscar partidas" });
  }
};

export const listLeagueSeason = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { season_id } = req.query;

  if (!season_id) {
    res
      .status(400)
      .json({ success: false, message: "season_id é obrigatório" });
    return;
  }

  try {
    const seasonData = await getLeagueSeason(season_id as string);
    res.json(seasonData);
  } catch (error) {
    console.error("Erro ao obter dados da temporada:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao buscar temporada" });
  }
};

export const listLeagueMatches = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { season_id } = req.query;

  if (!season_id) {
    res
      .status(400)
      .json({ success: false, message: "season_id é obrigatório" });
    return;
  }

  try {
    const seasonData = await getLeagueMatches(season_id as string);
    res.json(seasonData);
  } catch (error) {
    console.error("Erro ao obter dados da jogos da liga:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao buscar jogos da liga" });
  }
};

export const listLeagueTeams = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { season_id } = req.query;
    if (!season_id) {
      res
        .status(400)
        .json({ success: false, message: "season_id é obrigatório" });
      return;
    }
    const teamsData = await getLeagueTeams(Number(season_id));
    res.json(teamsData);
  } catch (error) {
    console.error("Erro ao obter dados dos times:", error);
    res.status(500).json({ success: false, message: "Erro ao buscar times" });
  }
};

export const listLeaguePlayers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { season_id } = req.query;
    if (!season_id) {
      res
        .status(400)
        .json({ success: false, message: "season_id é obrigatório" });
      return;
    }
    const teamsData = await getLeaguePlayers(season_id as string);
    res.json(teamsData);
  } catch (error) {
    console.error("Erro ao obter dados dos jogadores da liga:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao buscar jogadores da liga" });
  }
};

export const listLeagueReferees = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { season_id } = req.query;
    if (!season_id) {
      res
        .status(400)
        .json({ success: false, message: "season_id é obrigatório" });
      return;
    }
    const teamsData = await getLeagueReferees(season_id as string);
    res.json(teamsData);
  } catch (error) {
    console.error("Erro ao obter dados dos árbitros da liga:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao buscar árbitros da liga" });
  }
};

export const searchIndividualTeam = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { team_id } = req.query;
    if (!team_id) {
      res
        .status(400)
        .json({ success: false, message: "team_id é obrigatório" });
      return;
    }
    const teamsData = await getIndividualTeam(team_id as string);
    res.json(teamsData);
  } catch (error) {
    console.error("Erro ao obter dados individuais do time:", error);
    res.status(500).json({
      success: false,
      message: "Erro ao buscar dados individuais do time",
    });
  }
};

export const searchLastStatsTeam = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { team_id } = req.query;
    if (!team_id) {
      res
        .status(400)
        .json({ success: false, message: "team_id é obrigatório" });
      return;
    }
    const teamsData = await getLastStatsTeam(team_id as string);
    res.json(teamsData);
  } catch (error) {
    console.error("Erro ao obter dados dos árbitros da liga:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao buscar árbitros da liga" });
  }
};

export const listMatchDetails = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { match_id } = req.query;
    if (!match_id) {
      res
        .status(400)
        .json({ success: false, message: "team_id é obrigatório" });
      return;
    }
    const teamsData = await getMatchDetails(match_id as string);
    res.json(teamsData);
  } catch (error) {
    console.error("Erro ao obter dados dos árbitros da liga:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao buscar árbitros da liga" });
  }
};

export const searchLeagueTable = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { season_id } = req.query;
    if (!season_id) {
      res
        .status(400)
        .json({ success: false, message: "season_id é obrigatório" });
      return;
    }
    const teamsData = await getLeagueTable(season_id as string);
    res.json(teamsData);
  } catch (error) {
    console.error("Erro ao obter dados da tabela da liga:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao buscar dados da tabela" });
  }
};

export const searchPlayer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { player_id } = req.query;
    if (!player_id) {
      res
        .status(400)
        .json({ success: false, message: "player_id é obrigatório" });
      return;
    }
    const teamsData = await getPlayer(player_id as string);
    res.json(teamsData);
  } catch (error) {
    console.error("Erro ao obter dados do jogador:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao buscar dados do jogador" });
  }
};

export const searchReferee = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { referee_id } = req.query;
    if (!referee_id) {
      res
        .status(400)
        .json({ success: false, message: "referee_id é obrigatório" });
      return;
    }
    const teamsData = await getReferee(referee_id as string);
    res.json(teamsData);
  } catch (error) {
    console.error("Erro ao obter dados do jogador:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao buscar dados do jogador" });
  }
};

export const getOdds = async (req: Request, res: Response): Promise<void> => {
  try {
    const oddsData = await getOdd2Dot5();
    res.json(oddsData);
    return;
  } catch (error) {
    console.error("Erro ao obter ODDS:", error);
    res.status(500).json({ success: false, message: "Erro ao buscar ODDS" });
  }
};

export const getBTTSStats = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const bttsData = await BTTSStats();
    res.json(bttsData);
    return;
  } catch (error) {
    console.error("Erro ao obter BTTS:", error);
    res.status(500).json({ success: false, message: "Erro ao buscar BTTS" });
  }
};
