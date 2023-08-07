import { Route, Routes } from "react-router-dom";
import "./App.css";
import CryptoExchange from "./components/CryptoExchange";
import CryptoSwap from "./components/CryptoSwap";
import CryptoWorld from "./components/CryptoWorld";
import EarnPassiveIncome from "./components/EarnPassiveIncome";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Trade from "./components/Trade";
import UpNav from "./components/UpNav";
import Navbar from "./components/Navbar";
import Limit from "./components/Trade/Limit";
import Swap from "./components/Trade/Swap";
import Liquidity from "./components/Trade/Liquidity";
import AddLiquidity from "./components/Trade/AddLiquidity";
import Forms from "./components/Earn/Forms";
import Earn from "./components/Earn/Earn";
import Pools from "./components/Earn/Pools";
import NFTMain from "./components/NFT/NFTMain";
import NFTDetails from "./components/NFT/NFTDetails/NFTDetails";
import Items from "./components/NFT/ViewAllItems.jsx/Items";

function App() {
  return (
    <>
      <UpNav />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <CryptoSwap />
              <Trade />
              <EarnPassiveIncome />
              <CryptoExchange />
              <CryptoWorld />
            </>
          }
        />
        <Route path="/swap" element={<Swap />} />
        <Route path="/limit" element={<Limit />} />
        <Route path="/add-liquidity" element={<AddLiquidity />} />
        <Route path="/add-liquidity/liquidity" element={<Liquidity />} />
        <Route path="earn" element={<Earn />} />
        <Route path="nft-main" element={<NFTMain />} />
        <Route path="nft-main/nft-details" element={<NFTDetails />} />
        <Route path="nft-main/items" element={<Items />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
