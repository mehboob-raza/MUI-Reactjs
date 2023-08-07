import { Box, Card, Dialog, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import ConnectWallet from "../Trade/ConnectWallet";
import Button1 from "../Button1";

const Details = ({ handleClose }) => {
  const [openConnect, setOpenConnect] = useState(false);
  const handleConnectClose = () => {
    setOpenConnect(false);
  };
  return (
    <Box>
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
      <Card
        sx={{
          width: "500px",
          background: "linear-gradient(to right, #3D15A8, #A93EEB) ",
          p: 2,
          borderRadius: "20px",
        }}
      >
        <Box display="flex" justifyContent="space-between" mt={2} mb={2}>
          <Typography sx={{ color: "#fff", textAlign: "center" }}>
            Staking
          </Typography>
          <RxCrossCircled
            style={{ color: "#fff", cursor: "pointer" }}
            onClick={handleClose}
          />
        </Box>
        <Divider
          sx={{
            backgroundColor: "#fff",
          }}
        />
        <Typography
          sx={{
            color: "#fff",
            mt: 2,
            mb: 2,
          }}
        >
          Recent Profit
        </Typography>
        <Box
          mb={2}
          sx={{
            background: "#222252",
            p: 2,
            border: "1px solid #fff",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ color: "#fff" }}>0.00</Typography>
        </Box>
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
      </Card>
    </Box>
  );
};

export default Details;
