import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import OverViewBanner from "./OverViewBanner";
import HotCollections from "./overview/HotCollections";
import NewCollections from "./overview/NewCollections";
import NewestArrival from "./overview/NewestArrival";
import ActivityBanner from "./activity/ActivityBanner";
import ActivityTable from "./activity/ActivityTable.jsx";

const OverView = () => {
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
            width: "400px",
            borderRadius: "130px",
            p: 1,
            ".MuiTabs-indicator": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Tab
            label="Overview"
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
            label="Collections"
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
          <Tab
            label="Activity"
            onClick={() => setIndex(2)}
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
        <OverViewBanner index={index} />
        <NewCollections />
        <HotCollections index={index} />
        <NewestArrival />
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <OverViewBanner index={index} />
        <HotCollections index={index} />
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
        <OverViewBanner index={index} />
        <ActivityBanner />
        <ActivityTable />
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

export default OverView;
