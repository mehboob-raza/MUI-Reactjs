import React from "react";
import BattlesLegacy from "./battlesLegacy";
import BattleWeek from "./BattleWeek";
import BattleWeekRanking from "./BattleWeekRanking";
import { Box } from "@mui/material";
import TopCards from "../Dashboard/TopCards";

const Battles = () => {
  return (
    <Box>
      <TopCards />
      <BattlesLegacy />
      <BattleWeek />
      <BattleWeekRanking />
    </Box>
  );
};

export default Battles;
