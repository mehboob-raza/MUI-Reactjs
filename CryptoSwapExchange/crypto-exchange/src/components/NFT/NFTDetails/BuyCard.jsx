import {
  Box,
  Card,
  Dialog,
  Divider,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { RxCrossCircled } from "react-icons/rx";
import image138 from "../../../assets/image138.png";
import logoo from "../../../assets/logoo.png";
import Button1 from "../../Button1";
import ConnectWallet from "../../Trade/ConnectWallet";
import { useState } from "react";
import { CiWallet } from "react-icons/ci";

const BuyCard = ({ handleClose }) => {
  const [openConnect, setOpenConnect] = useState(false);

  const handleConnectClose = () => {
    setOpenConnect(false);
  };

  return (
    <Box
      mt={6}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
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
      <Box
        sx={{
          width: "500px",
          background: "linear-gradient(to right, #3D15A8, #A93EEB) ",
          // p: 2,
          borderRadius: "20px",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="#fff"
        >
          <Typography>Review</Typography>
          <RxCrossCircled onClick={handleClose} sx={{ cursor: "pointer" }} />
        </Box>
        <Divider light sx={{ borderColor: "#fff", mt: 2 }} />
        <Box display="flex" alignItems="center" mt={4} gap={2}>
          <Box component="img" src={image138} width={50} />
          <Box>
            <Typography sx={{ color: "gray", fontSize: "10px" }}>
              Liquid Monsters
            </Typography>
            <Typography sx={{ color: "#fff", fontSize: "16px" }}>
              Liquid Monster #2140
            </Typography>
            <Typography sx={{ color: "gray", fontSize: "10px" }}>
              Token ID: 2140
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            background: "#222252",
            mt: 4,
            borderRadius: "10px",
          }}
        >
          <Box display="flex" flexDirection="column" gap={2} p={2}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              //   p={1}
            >
              <Typography sx={{ color: "#fff" }}> Pay with </Typography>
              <Box>
                <Tabs
                  sx={{
                    backgroundColor: "#06060E",
                    width: "200px",
                    borderRadius: "130px",
                    p: 0.5,
                  }}
                >
                  <Tab
                    label="BNB"
                    sx={{
                      color: "#fff",
                    }}
                  />
                  <Tab
                    label="WBNB"
                    sx={{
                      color: "#fff",
                    }}
                  />
                </Tabs>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography sx={{ color: "#fff" }}>Total Payment </Typography>
              <Box display="flex" gap={1}>
                <Box component="img" src={logoo} width={20} height={30} />
                <Box color="#fff">
                  <Typography>0.125</Typography>
                  <Typography> ($54.48) </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              color="#fff"
            >
              <Typography>BNB in wallet </Typography>
              <Button1 onClick={() => setOpenConnect(true)}>
                <CiWallet />
                Connect Wallet
              </Button1>
            </Box>
          </Box>
        </Box>

        <Typography sx={{ color: "#fff", mt: 4, textAlign: "center" }}>
          Convert between BNB and WBNB for free: Convert
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          mt={4}
          mb={4}
        >
          <Button1>Get BNB Or WBNB</Button1>
          <Button1>Check Out</Button1>
        </Box>
      </Box>
    </Box>
  );
};

export default BuyCard;
