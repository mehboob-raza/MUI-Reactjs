import SideBar from "../Sidebar/SideBar";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Staking from "./Staking/Staking";
import Wolfpacks from "./Wolfpacks";
import Battles from "./Battles";
import AlphaaNFT from "./AlphaaNFT";

const AdminDrawer = () => {
  return (
    <div
      style={{
        // overflowX: "hidden",
        background: "#191919",
        position: "relative",
        zIndex: 0,
      }}
    >
      {/* <Route path="/" element={<LandingPage />} /> */}
      <Box
        sx={
          {
            // display: { md: "block", sm: "block", xs: "none" },
          }
        }
      >
        <SideBar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/wolfpacks" element={<Wolfpacks />} />
            <Route path="/battles" element={<Battles />} />
            <Route path="/nft" element={<AlphaaNFT />} />
          </Routes>
        </SideBar>
      </Box>
    </div>
  );
};

export default AdminDrawer;
