import { Box } from "@mui/material";
import LandingNav from "./LandingNav";
import LandingWelcome from "./LandingWelcome";
import MovingForward from "./MovingForward";
import AlphaNFT from "./AlphaNFT";
import UnderstandWC from "./UnderstandWC";
import ExternalRevenue from "./ExternalRevenue";
import KYC from "./KYC";
import Partners from "./Partners";
import Community from "./Community";
import Dot from "../assets/Dot.png";
import Dot1 from "../assets/Dot1.png";

const index = () => {
  return (
    <Box
      display="flex"
      sx={{
        position: "relative",
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        src={Dot}
        sx={{
          position: "absolute",
          width: "25%",
          top: 0,
        }}
      />
      <LandingNav />
      <LandingWelcome />
      <MovingForward />
      <AlphaNFT />
      <UnderstandWC />
      <ExternalRevenue />
      <KYC />
      <Partners />
      <Community />
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Box component="img" src={Dot1} sx={{ width: "30%" }} />
      </Box>
    </Box>
  );
};

export default index;
