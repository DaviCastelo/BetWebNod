"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchReferee = exports.searchPlayer = exports.searchLeagueTable = exports.listMatchDetails = exports.searchLastStatsTeam = exports.searchIndividualTeam = exports.listLeagueReferees = exports.listLeaguePlayers = exports.listLeagueTeams = exports.listLeagueMatches = exports.listLeagueSeason = exports.listTodayMatches = exports.listCountry = exports.listLeagues = exports.testApiConnection = void 0;
const apiService_1 = require("../services/apiService");
const testApiConnection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, apiService_1.testConnection)();
        res.json({ success: true, data });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Erro ao conectar à API FootyStats",
        });
    }
});
exports.testApiConnection = testApiConnection;
const listLeagues = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leagues = yield (0, apiService_1.getLeagues)();
        res.json(leagues);
    }
    catch (error) {
        console.error("Erro ao obter a lista de ligas:", error);
        res.status(500).json({ success: false, message: "Erro ao buscar ligas" });
    }
});
exports.listLeagues = listLeagues;
const listCountry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const country = yield (0, apiService_1.getCountry)();
        res.json(country);
    }
    catch (error) {
        console.error("Erro ao obter o país:", error);
        res.status(500).json({ success: false, message: "Erro ao buscar país" });
    }
});
exports.listCountry = listCountry;
const listTodayMatches = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const matches = yield (0, apiService_1.getTodayMatches)();
        res.json(matches);
    }
    catch (error) {
        console.error("Erro ao obter o partidas:", error);
        res
            .status(500)
            .json({ success: false, message: "Erro ao buscar partidas" });
    }
});
exports.listTodayMatches = listTodayMatches;
const listLeagueSeason = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { season_id } = req.query;
    if (!season_id) {
        res
            .status(400)
            .json({ success: false, message: "season_id é obrigatório" });
        return;
    }
    try {
        const seasonData = yield (0, apiService_1.getLeagueSeason)(season_id);
        res.json(seasonData);
    }
    catch (error) {
        console.error("Erro ao obter dados da temporada:", error);
        res
            .status(500)
            .json({ success: false, message: "Erro ao buscar temporada" });
    }
});
exports.listLeagueSeason = listLeagueSeason;
const listLeagueMatches = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { season_id } = req.query;
    if (!season_id) {
        res
            .status(400)
            .json({ success: false, message: "season_id é obrigatório" });
        return;
    }
    try {
        const seasonData = yield (0, apiService_1.getLeagueMatches)(season_id);
        res.json(seasonData);
    }
    catch (error) {
        console.error("Erro ao obter dados da jogos da liga:", error);
        res
            .status(500)
            .json({ success: false, message: "Erro ao buscar jogos da liga" });
    }
});
exports.listLeagueMatches = listLeagueMatches;
const listLeagueTeams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { season_id } = req.query;
        if (!season_id) {
            res
                .status(400)
                .json({ success: false, message: "season_id é obrigatório" });
            return;
        }
        const teamsData = yield (0, apiService_1.getLeagueTeams)(Number(season_id));
        res.json(teamsData);
    }
    catch (error) {
        console.error("Erro ao obter dados dos times:", error);
        res.status(500).json({ success: false, message: "Erro ao buscar times" });
    }
});
exports.listLeagueTeams = listLeagueTeams;
const listLeaguePlayers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { season_id } = req.query;
        if (!season_id) {
            res
                .status(400)
                .json({ success: false, message: "season_id é obrigatório" });
            return;
        }
        const teamsData = yield (0, apiService_1.getLeaguePlayers)(season_id);
        res.json(teamsData);
    }
    catch (error) {
        console.error("Erro ao obter dados dos jogadores da liga:", error);
        res
            .status(500)
            .json({ success: false, message: "Erro ao buscar jogadores da liga" });
    }
});
exports.listLeaguePlayers = listLeaguePlayers;
const listLeagueReferees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { season_id } = req.query;
        if (!season_id) {
            res
                .status(400)
                .json({ success: false, message: "season_id é obrigatório" });
            return;
        }
        const teamsData = yield (0, apiService_1.getLeagueReferees)(season_id);
        res.json(teamsData);
    }
    catch (error) {
        console.error("Erro ao obter dados dos árbitros da liga:", error);
        res
            .status(500)
            .json({ success: false, message: "Erro ao buscar árbitros da liga" });
    }
});
exports.listLeagueReferees = listLeagueReferees;
const searchIndividualTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { team_id } = req.query;
        if (!team_id) {
            res
                .status(400)
                .json({ success: false, message: "team_id é obrigatório" });
            return;
        }
        const teamsData = yield (0, apiService_1.getIndividualTeam)(team_id);
        res.json(teamsData);
    }
    catch (error) {
        console.error("Erro ao obter dados individuais do time:", error);
        res.status(500).json({
            success: false,
            message: "Erro ao buscar dados individuais do time",
        });
    }
});
exports.searchIndividualTeam = searchIndividualTeam;
const searchLastStatsTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { team_id } = req.query;
        if (!team_id) {
            res
                .status(400)
                .json({ success: false, message: "team_id é obrigatório" });
            return;
        }
        const teamsData = yield (0, apiService_1.getLastStatsTeam)(team_id);
        res.json(teamsData);
    }
    catch (error) {
        console.error("Erro ao obter dados dos árbitros da liga:", error);
        res
            .status(500)
            .json({ success: false, message: "Erro ao buscar árbitros da liga" });
    }
});
exports.searchLastStatsTeam = searchLastStatsTeam;
const listMatchDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { match_id } = req.query;
        if (!match_id) {
            res
                .status(400)
                .json({ success: false, message: "team_id é obrigatório" });
            return;
        }
        const teamsData = yield (0, apiService_1.getMatchDetails)(match_id);
        res.json(teamsData);
    }
    catch (error) {
        console.error("Erro ao obter dados dos árbitros da liga:", error);
        res
            .status(500)
            .json({ success: false, message: "Erro ao buscar árbitros da liga" });
    }
});
exports.listMatchDetails = listMatchDetails;
const searchLeagueTable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { season_id } = req.query;
        if (!season_id) {
            res
                .status(400)
                .json({ success: false, message: "season_id é obrigatório" });
            return;
        }
        const teamsData = yield (0, apiService_1.getLeagueTable)(season_id);
        res.json(teamsData);
    }
    catch (error) {
        console.error("Erro ao obter dados da tabela da liga:", error);
        res
            .status(500)
            .json({ success: false, message: "Erro ao buscar dados da tabela" });
    }
});
exports.searchLeagueTable = searchLeagueTable;
const searchPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { player_id } = req.query;
        if (!player_id) {
            res
                .status(400)
                .json({ success: false, message: "player_id é obrigatório" });
            return;
        }
        const teamsData = yield (0, apiService_1.getPlayer)(player_id);
        res.json(teamsData);
    }
    catch (error) {
        console.error("Erro ao obter dados do jogador:", error);
        res
            .status(500)
            .json({ success: false, message: "Erro ao buscar dados do jogador" });
    }
});
exports.searchPlayer = searchPlayer;
const searchReferee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { referee_id } = req.query;
        if (!referee_id) {
            res
                .status(400)
                .json({ success: false, message: "referee_id é obrigatório" });
            return;
        }
        const teamsData = yield (0, apiService_1.getReferee)(referee_id);
        res.json(teamsData);
    }
    catch (error) {
        console.error("Erro ao obter dados do jogador:", error);
        res
            .status(500)
            .json({ success: false, message: "Erro ao buscar dados do jogador" });
    }
});
exports.searchReferee = searchReferee;
