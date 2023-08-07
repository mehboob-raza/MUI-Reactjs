import React from "react";
import Marquee from "react-fast-marquee";
import bloomberg from "../assets/bloomberg.png";
import yahoo from "../assets/yahoo.png";
import globe from "../assets/globe.png";
import Benzinga from "../assets/Benzinga.png";
import Digital from "../assets/Digital.png";
import market from "../assets/market.png";
import logoSite from "../assets/logoSite.png";
import { Box } from "@mui/material";
const ImgMarquee = () => {
  return (
    <Box sx={{ overflow: "hidden", mt: 2 }}>
      <Marquee direction="left" pauseOnHover>
        <Box display="flex" alignItems="center" justifyContent="center" gap={4}>
          <img src={bloomberg} alt="Image 1" />
          <img src={yahoo} alt="Image 2" />
          <img src={globe} alt="Image 3" />\
          <img src={Benzinga} alt="Image 1" />
          <img src={Digital} alt="Image 2" />
          <img src={market} alt="Image 3" />
          <img src={logoSite} alt="Image 1" />
        </Box>
      </Marquee>
    </Box>
  );
};

export default ImgMarquee;
