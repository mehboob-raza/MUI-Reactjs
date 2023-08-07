import { Box, Card, Dialog, Divider, Typography } from "@mui/material";
import { RxCrossCircled } from "react-icons/rx";
import { BsExclamationTriangle } from "react-icons/bs";
import Button1 from "../Button1";
import ConnectWallet from "../Trade/ConnectWallet";
import { useState } from "react";

const ClaimBounty = ({ handleClose }) => {
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

        // sx={{
        //   ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
        //     // backgroundColor: "transparent",
        //     boxShadow: "none",
        //   },
        // }}
      >
        <ConnectWallet handleConnectClose={handleConnectClose} />
      </Dialog>
      <Box
        sx={{
          width: "500px",
          background: "linear-gradient(to right, #3D15A8, #A93EEB) ",
          //   p: 2,
          borderRadius: "20px",
        }}
      >
        <Box display="flex" justifyContent="space-between" mt={2} mb={2}>
          <Typography sx={{ color: "#fff", textAlign: "center" }}>
            Claim Bounty
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

        <Box
          mt={3}
          mb={2}
          sx={{
            background: "#fff",
            p: 2,
            border: "1px solid #FFB237",
            borderRadius: "10px",
            color: "#FFB237",
            display: "flex",
          }}
        >
          <BsExclamationTriangle />
          <Typography sx={{}}>
            Remember that you will pay the gas fee.
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          //   alignItems="center"
          color="#fff"
          mt={3}
          mb={3}
        >
          <Typography>You will claim</Typography>
          <Box display="flex" flexDirection="column">
            <Typography> 0.00000 Crypto </Typography>
            <Typography>~$0.26 USD</Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            backgroundColor: "#fff",
          }}
        />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="#fff"
          mt={3}
          mb={3}
        >
          <Typography>Pool total pending yield Bounty</Typography>
          <Typography>0.0000000 Crypto Bounty</Typography>
        </Box>
        <Divider
          sx={{
            backgroundColor: "#fff",
            width: "100%",
          }}
        />

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

export default ClaimBounty;
