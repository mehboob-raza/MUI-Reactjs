import { Box, Card, Container, Typography } from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";
import meta from "../../assets/meta.png";
import coinbase from "../../assets/coinbase.png";
import argent from "../../assets/argent.png";
import safe from "../../assets/safe.png";
import rain from "../../assets/rain.png";

const connectWalletData = [
  {
    h: "Metamask",
    img: meta,
  },
  {
    h: "Rainbow",
    img: rain,
  },
  {
    h: "Gnosos Safe",
    img: safe,
  },
  {
    h: "Argent",
    img: argent,
  },
  {
    h: "Coinbase Wallet",
    img: coinbase,
  },
];
const ConnectWallet = ({ handleConnectClose }) => {
  return (
    <Box>
      {/* <Container maxWidth="md"> */}
      <Box
        sx={{
          minWidth: "420px",
          background: "linear-gradient(to right, #3D15A8, #A93EEB) ",
          p: 2,
          borderRadius: "20px",
          display: "flex",
          gap: 2,
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "#fff",
          }}
        >
          Connect Wallet
        </Typography>
        <Box display="flex" position="absolute" right={10}>
          <AiOutlineCloseCircle
            style={{ color: "#fff", cursor: "pointer" }}
            onClick={handleConnectClose}
          />
        </Box>
        <Box
          sx={{
            p: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {connectWalletData.map((data, i) => {
            return (
              <Box
                key={i}
                display="flex"
                justifyContent="space-between"
                sx={{
                  background: "#222252",
                  // justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                  borderRadius: 2,
                }}
              >
                <Typography sx={{ color: "#fff" }}> {data.h} </Typography>
                <Box component="img" src={data.img} />
              </Box>
            );
          })}
        </Box>
      </Box>
      {/* </Container> */}
    </Box>
  );
};

export default ConnectWallet;
