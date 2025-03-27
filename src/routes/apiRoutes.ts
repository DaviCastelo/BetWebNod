import express from "express";
import asyncHandler from "express-async-handler";
import {
  getBTTSStats,
  getOdds,
  listCountry,
  listLeagueMatches,
  listLeaguePlayers,
  listLeagueReferees,
  listLeagues,
  listLeagueSeason,
  listLeagueTeams,
  listMatchDetails,
  listTodayMatches,
  searchIndividualTeam,
  searchLastStatsTeam,
  searchLeagueTable,
  searchPlayer,
  searchReferee,
  testApiConnection,
} from "../controllers/apiController";

const router = express.Router();

router.get("/test-footystats", testApiConnection);
router.get("/country", listCountry);
router.get("/today-matches", listTodayMatches);

router.get("/leagues", listLeagues);
router.get("/league-season", asyncHandler(listLeagueSeason));
router.get("/league-matches", asyncHandler(listLeagueMatches));
router.get("/league-teams", asyncHandler(listLeagueTeams));
router.get("/league-players", asyncHandler(listLeaguePlayers));
router.get("/league-referees", asyncHandler(listLeagueReferees));

router.get("/individual-team", asyncHandler(searchIndividualTeam));
router.get("/last-stats-team", asyncHandler(searchLastStatsTeam));
router.get("/match-details", asyncHandler(listMatchDetails));
router.get("/league-table", asyncHandler(searchLeagueTable));
router.get("/player", asyncHandler(searchPlayer));
router.get("/referee", asyncHandler(searchReferee));

router.get("/odds", getOdds);
router.get("/btts", getBTTSStats);

export default router;
