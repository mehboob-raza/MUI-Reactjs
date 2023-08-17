import { Box } from "@mui/material";
import TopCards from "../Dashboard/TopCards";
import MidCard from "./MidCard";
import ROIWithdraw from "./ROIWithdraw";
import StakingPortfolio from "./StakingPortfolio";
import YourStakes from "./YourStakes";

const Staking = () => {
  return (
    <Box>
      <TopCards />
      <MidCard />
      <ROIWithdraw />
      <StakingPortfolio />
      <YourStakes />
    </Box>
  );
};

export default Staking;
