import React from "react";
import SideBar from "../Sidebar/SideBar";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Staking from "./Staking";
import Wolfpacks from "./Wolfpacks";
import Battles from "./Battles";
import AlphaaNFT from "./AlphaaNFT";

const AdminDrawer = () => {
  return (
    <div
      style={{
        overflowX: "hidden",
        background: "#191919",
        position: "relative",
        zIndex: 0,
      }}
    >
      {/* <Route path="/" element={<LandingPage />} /> */}
      <SideBar>
        {/* <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 2,
            background: "#191919",
            minHeight: "100%",
            opacity: 1,
            zIndex: 0,
            position: "relative",
          }}
        > */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/wolfpacks" element={<Wolfpacks />} />
          <Route path="/battles" element={<Battles />} />
          <Route path="/nft" element={<AlphaaNFT />} />
        </Routes>
        {/* </Box> */}
      </SideBar>
    </div>
  );
};

export default AdminDrawer;
