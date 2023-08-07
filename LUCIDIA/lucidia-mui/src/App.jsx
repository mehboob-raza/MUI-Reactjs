import "./App.css";
import Banner from "./components/Banner";
import BuyLucid from "./components/BuyLucid";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Free2play from "./components/Free2play";
import Home from "./components/Home";
import ImgMarquee from "./components/ImgMarquee";
import LUCIDTokens from "./components/LUCIDTokens";
import OurPartners from "./components/OurPartners";

function App() {
  return (
    <>
      <Home />
      <ImgMarquee />
      <Free2play />
      <Banner />
      <BuyLucid />
      <OurPartners />
      <LUCIDTokens />
      <Community />
      <Footer />
    </>
  );
}

export default App;
