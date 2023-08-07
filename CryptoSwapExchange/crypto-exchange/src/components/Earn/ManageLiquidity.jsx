import { Box, Dialog, Divider, Tab, Tabs, Typography } from "@mui/material";
import { AiOutlineSetting } from "react-icons/ai";

import Button1 from "../Button1";
import { useState } from "react";
import ConnectWallet from "../Trade/ConnectWallet";
import { RxCrossCircled } from "react-icons/rx";
import SelectToken from "../Trade/SelectToken";
import { AiOutlineInfoCircle } from "react-icons/ai";
import AddLiquidity1 from "./AddLiquidity1";
import StakeLiquidity from "./StakeLiquidity";
import Rewards from "./Rewards";

const ManageLiquidity = ({ handleClose }) => {
  const [openConnect, setOpenConnect] = useState(false);
  const [open, setOpen] = useState(false);

  const [selectedTab, setSelectedTab] = useState(0);
  const [index, setIndex] = useState(0);
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleConnectClose = () => {
    setOpenConnect(false);
  };
  return (
    <Box mt={6}>
      <Dialog
        onClose={handleConnectClose}
        open={openConnect}
        sx={{
          ".MuiDialog-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <ConnectWallet handleConnectClose={handleConnectClose} />
      </Dialog>
      <Dialog
        onClose={handleClose}
        open={open}
        sx={{
          ".MuiDialog-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <SelectToken />
      </Dialog>
      <Box
        sx={{
          width: "500px",
          background: "linear-gradient(to right, #3D15A8, #A93EEB) ",
          p: 2,
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            // justifyContent: "center",
            flexDirection: "column",
            // alignItems: "center",
            display: "flex",
          }}
        >
          <Box
            mt={2}
            mb={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              {index === 0
                ? "Manage liquidity"
                : index === 1
                ? "Stake or unstake your liquidity"
                : "Your position and rewards"}{" "}
              <AiOutlineInfoCircle />
            </Typography>
            <Box sx={{ color: "#fff", display: "flex", gap: 2 }}>
              <AiOutlineSetting
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              />
              <RxCrossCircled
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                }}
                onClick={handleClose}
              />
            </Box>
          </Box>
          <Divider
            light
            sx={{
              borderColor: "#fff",
              mb: 4,
            }}
          />

          <Box display="flex" justifyContent="center" alignItems="center">
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              sx={{
                backgroundColor: "#222252",
                width: "340px",
                borderRadius: "130px",
                p: 2,
                ".MuiTabs-indicator": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Tab
                label="Liquidity"
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
                label="Staking"
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
                label="Rewards"
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
        </Box>

        <TabPanel value={selectedTab} index={0}>
          <AddLiquidity1 setOpen={setOpen} />
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          <StakeLiquidity />
        </TabPanel>
        <TabPanel value={selectedTab} index={2}>
          <Rewards />
        </TabPanel>

        <Box
          mt={2}
          mb={2}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button1 onClick={() => setOpenConnect(true)}>
            Connect To Wallet
          </Button1>
        </Box>
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

export default ManageLiquidity;
