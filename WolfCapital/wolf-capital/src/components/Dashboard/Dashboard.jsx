import AlphaRound from "./AlphaRound";
import AlphaaNFTs from "./AlphaaNFTs";
import FAQ from "./FAQ";
import Stake from "./Stake";
import TopCards from "./TopCards";
import TotalWolfPacks from "./TotalWolfPacks";
import WBattels from "./WBattels";

const Dashboard = () => {
  return (
    <div>
      <TopCards />
      <TotalWolfPacks />
      <Stake />
      <AlphaaNFTs />
      <AlphaRound />
      <WBattels />
      <FAQ />
    </div>
  );
};

export default Dashboard;
