import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import EarnBanner from "./EarnBanner.jsx";
import ActivityTable from "../NFT/activity/ActivityTable.jsx";
import Forms from "./Forms.jsx";
import Pools from "./Pools.jsx";
const Earn = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [index, setIndex] = useState(0);
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box mt={4}>
      <Box
        sx={{
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          sx={{
            backgroundColor: "#222252",
            width: "220px",
            borderRadius: "130px",
            p: 2,
            ".MuiTabs-indicator": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Tab
            label="Farms"
            onClick={() => setIndex(0)}
            sx={{
              color: "#fff",
              "&:hover": {
                color: "#EF682A",
                textDecoration: "none", // Remove underline on hover
              },
              "&.Mui-selected": {
                textDecoration: "none",
                color: "#fff",
                backgroundColor: "#EF682A",
                borderRadius: "70px",
              },
            }}
          />
          <Tab
            label="Polls"
            onClick={() => setIndex(1)}
            sx={{
              color: "#fff",
              "&:hover": {
                color: "#EF682A",
                textDecoration: "none", // Remove underline on hover
              },
              "&.Mui-selected": {
                textDecoration: "none",
                color: "#fff",
                backgroundColor: "#EF682A",
                borderRadius: "70px",
              },
            }}
          />
        </Tabs>
      </Box>

      <TabPanel value={selectedTab} index={0}>
        <EarnBanner index={index} />
        <Forms />
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <EarnBanner index={index} />
        <Pools />
      </TabPanel>
    </Box>
  );
};

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export default Earn;
