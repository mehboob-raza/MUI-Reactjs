import {
  Box,
  Button,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { BiArrowBack } from "react-icons/bi";
import frame from "../../../assets/Frame53.png";
import Ellipse29 from "../../../assets/Ellipse29.png";
import { useState } from "react";
import ActivityBanner from "../activity/ActivityBanner";
import NewestArrivals from "../overview/NewestArrivals";
import ActivityTable from "../activity/ActivityTable";
import ItemsBanner from "./ItemsBanner";

const itemsData = [
  {
    h: "Items",
    p: "10,000",
  },
  {
    h: "Items listed",
    p: "2,041",
  },
  {
    h: "Lowest (BNB)",
    p: "5,750",
  },
  {
    h: "Vol. (BNB)",
    p: "89,764.611",
  },
];

const Items = ({ children, value, index }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box mt={6}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <Box display="flex" gap={1} alignItems="center" color="#fff">
              <BiArrowBack />
              <Typography>All Collections</Typography>
            </Box>

            <Box
              mt={14}
              sx={{
                background: `url(${frame}) `,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                minHeight: "30vh",
              }}
            >
              <Box
                component="img"
                src={Ellipse29}
                width={100}
                height={100}
                sx={{
                  ml: "45%",
                  mt: "-5%",
                }}
              />

              <Typography
                variant="h4"
                mt={4}
                sx={{ textAlign: "center", color: "#fff", fontWeight: "bold" }}
              >
                Colorful Abstract
              </Typography>
              <Typography
                mt={2}
                mb={4}
                sx={{ textAlign: "center", color: "#fff" }}
              >
                10,000 unique, randomly-generated PancakeSwap NFTs from the mind
                of Chef Cecy Meade. Join the squad.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // mt: "-10%",
                }}
              >
                <Box
                  sx={{
                    background: "linear-gradient(to right, #3D15A8, #A93EEB) ",
                    display: "flex",
                    borderRadius: "130px",
                    gap: 4,
                    p: 2,
                  }}
                >
                  {itemsData.map((data, i) => {
                    return (
                      <Box key={i} color="#fff">
                        <Typography sx={{ fontSize: "14px" }}>
                          {" "}
                          {data.h}{" "}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            textAlign: "center",
                            fontWeight: "bold",
                          }}
                        >
                          {" "}
                          {data.p}{" "}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item md={12} sm={12} xs={12}>
            <Box mt={8}>
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
                    width: "300px",
                    borderRadius: "130px",
                    p: 2,
                  }}
                >
                  <Tab
                    label="Items"
                    sx={{
                      color: "#fff",
                    }}
                  />
                  <Tab
                    label="Traits"
                    sx={{
                      color: "#fff",
                    }}
                  />
                  <Tab
                    label="Activity"
                    sx={{
                      color: "#fff",
                    }}
                  />
                </Tabs>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box>
        <TabPanel value={selectedTab} index={0}>
          <ItemsBanner />
          <NewestArrivals />
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          <ActivityTable />
        </TabPanel>
        <TabPanel value={selectedTab} index={2}>
          <ActivityBanner />
          <ActivityTable />
        </TabPanel>
      </Box>
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

export default Items;
