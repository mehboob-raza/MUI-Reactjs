import WolfCapital from "./WolfCapital";
import RaisedGoal from "./RaisedGoal";
import NFTCards from "./NFTCards";
import NFTPortfolio from "./NFTPortfolio";
import NetWorth from "./NetWorth";
import CopyTrading from "./CopyTrading";
import TopCards from "../Dashboard/TopCards";

const AlphaaNFT = () => {
  return (
    <div>
      <TopCards />
      <WolfCapital />
      <RaisedGoal />
      <NFTCards />
      <NFTPortfolio />
      <NetWorth />
      <CopyTrading />
    </div>
  );
};

export default AlphaaNFT;
