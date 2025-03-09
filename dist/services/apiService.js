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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReferee = exports.getPlayer = exports.getLeagueTable = exports.getMatchDetails = exports.getLastStatsTeam = exports.getIndividualTeam = exports.getLeagueReferees = exports.getLeaguePlayers = exports.getLeagueTeams = exports.getLeagueMatches = exports.getLeagueSeason = exports.getTodayMatches = exports.getCountry = exports.getLeagues = exports.testConnection = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenvConfig_1 = require("../config/dotenvConfig");
const testConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${dotenvConfig_1.API_URL}/test-call?key=${dotenvConfig_1.API_KEY}`);
        return response.data;
    }
    catch (error) {
        console.error("Erro ao testar a conexão com a API FootyStats:", error);
        throw error;
    }
});
exports.testConnection = testConnection;
const getLeagues = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${dotenvConfig_1.API_URL}/league-list?key=${dotenvConfig_1.API_KEY}`);
        return response.data;
    }
    catch (error) {
        console.error("Erro ao obter a lista de ligas:", error);
    }
});
exports.getLeagues = getLeagues;
const getCountry = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${dotenvConfig_1.API_URL}/country-list?key=${dotenvConfig_1.API_KEY}`);
        return response.data;
    }
    catch (error) {
        console.error("Erro ao obter a lista de países:", error);
    }
});
exports.getCountry = getCountry;
const getTodayMatches = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${dotenvConfig_1.API_URL}/todays-matches?key=${dotenvConfig_1.API_KEY}`);
        return response.data;
    }
    catch (error) {
        console.error("Erro ao obter a lista de jogos:", error);
    }
});
exports.getTodayMatches = getTodayMatches;
const getLeagueSeason = (seasonId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const BASE_URL = `${dotenvConfig_1.API_URL}/league-season?key=${dotenvConfig_1.API_KEY}&season_id=${seasonId}`;
        const response = yield axios_1.default.get(BASE_URL);
        return response.data;
    }
    catch (error) {
        console.error("Erro ao obter dados da temporada:", error);
        throw new Error("Erro ao buscar temporada");
    }
});
exports.getLeagueSeason = getLeagueSeason;
const getLeagueMatches = (seasonId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const BASE_URL = `${dotenvConfig_1.API_URL}/league-matches?key=${dotenvConfig_1.API_KEY}&season_id=${seasonId}`;
        const response = yield axios_1.default.get(BASE_URL);
        return response.data;
    }
    catch (error) {
        console.error("Erro ao obter partidas da liga:", error);
        throw new Error("Erro ao buscar temporada");
    }
});
exports.getLeagueMatches = getLeagueMatches;
const getLeagueTeams = (seasonId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const BASE_URL = `${dotenvConfig_1.API_URL}/league-teams?key=${dotenvConfig_1.API_KEY}&season_id=${seasonId}&include=stats`;
        const response = yield axios_1.default.get(BASE_URL);
        return response.data;
    }
    catch (error) {
        console.error("Erro ao obter dados dos times:", error);
        throw new Error("Erro ao buscar times");
    }
});
exports.getLeagueTeams = getLeagueTeams;
const getLeaguePlayers = (seasonId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const BASE_URL = `${dotenvConfig_1.API_URL}/league-players?key=${dotenvConfig_1.API_KEY}&season_id=${seasonId}&include=stats`;
        const response = yield axios_1.default.get(BASE_URL);
        return response.data;
    }
    catch (error) {
        console.error("Erro ao obter dados dos jogadores:", error);
        throw new Error("Erro ao buscar times");
    }
});
exports.getLeaguePlayers = getLeaguePlayers;
const getLeagueReferees = (seasonId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const BASE_URL = `${dotenvConfig_1.API_URL}/league-referees?key=${dotenvConfig_1.API_KEY}&season_id=${seasonId}`;
        const response = yield axios_1.default.get(BASE_URL);
        return response.data;
    }
    catch (error) {
        console.error("Erro ao obter dados dos árbitros:", error);
        throw new Error("Erro ao buscar times");
    }
});
exports.getLeagueReferees = getLeagueReferees;
const getIndividualTeam = (teamId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const BASE_URL = `${dotenvConfig_1.API_URL}/team?key=${dotenvConfig_1.API_KEY}&team_id=${teamId}&include=stats`;
        const response = yield axios_1.default.get(BASE_URL);
        return response.data;
    }
    catch (error) {
        console.error("Erro ao obter dados dos do time:", error);
        throw new Error("Erro ao buscar times");
    }
});
exports.getIndividualTeam = getIndividualTeam;
const getLastStatsTeam = (teamId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const BASE_URL = `${dotenvConfig_1.API_URL}/lastx?key=${dotenvConfig_1.API_KEY}&team_id=${teamId}`;
        const response = yield axios_1.default.get(BASE_URL);
        return response.data;
    }
    catch (error) {
        console.error("Erro ao obter dados das estatistica do time:", error);
        throw new Error("Erro ao buscar times");
    }
});
exports.getLastStatsTeam = getLastStatsTeam;
const getMatchDetails = (matchId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const BASE_URL = `${dotenvConfig_1.API_URL}/match?key=${dotenvConfig_1.API_KEY}&match_id=${matchId}`;
        const response = yield axios_1.default.get(BASE_URL);
        return response.data;
    }
    catch (error) {
        console.error("Erro ao obter dados das estatistica da partida:", error);
        throw new Error("Erro ao buscar times");
    }
});
exports.getMatchDetails = getMatchDetails;
const getLeagueTable = (seasonId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const BASE_URL = `${dotenvConfig_1.API_URL}/league-tables?key=${dotenvConfig_1.API_KEY}&season_id=${seasonId}`;
        const response = yield axios_1.default.get(BASE_URL);
        return response.data;
    }
    catch (error) {
        console.error("Erro ao obter dados das tabela da liga:", error);
        throw new Error("Erro ao buscar times");
    }
});
exports.getLeagueTable = getLeagueTable;
const getPlayer = (playerId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const BASE_URL = `${dotenvConfig_1.API_URL}/player-stats?key=${dotenvConfig_1.API_KEY}&player_id=${playerId}`;
        const response = yield axios_1.default.get(BASE_URL);
        return response.data;
    }
    catch (error) {
        console.error("Erro ao obter dados do jogador:", error);
        throw new Error("Erro ao buscar times");
    }
});
exports.getPlayer = getPlayer;
const getReferee = (refereeId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const BASE_URL = `${dotenvConfig_1.API_URL}/referee?key=${dotenvConfig_1.API_KEY}&referee_id=${refereeId}`;
        const response = yield axios_1.default.get(BASE_URL);
        return response.data;
    }
    catch (error) {
        console.error("Erro ao obter dados do árbitro:", error);
        throw new Error("Erro ao buscar times");
    }
});
exports.getReferee = getReferee;
