import { Box } from "@mui/material";
import React from "react";
import bg1 from "../assets/bg1.svg";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import ImgMarquee from "./ImgMarquee";
import Free2play from "./Free2play";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <HomePage />
    </Box>
  );
};

export default Home;
