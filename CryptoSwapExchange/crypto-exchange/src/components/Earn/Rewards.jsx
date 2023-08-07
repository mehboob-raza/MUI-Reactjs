import { Box, Typography } from "@mui/material";
import bnb from "../../assets/bnb.png";
import eth from "../../assets/eth.png";

const Rewards = () => {
  return (
    <Box mt={2} color="#fff">
      <Box>
        <Typography>Your Deposits</Typography>
        <Box
          mt={2}
          sx={{
            backgroundColor: "#222252",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            border: "1px solid #ffffff",
            borderRadius: "10px",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" gap={1} alignItems="center">
              <Box component="img" src={eth} />
              <Typography>0 ETH </Typography>
            </Box>
            <Typography>0 ETH-BNB$0.00</Typography>
          </Box>
          <Box display="flex" gap={1} alignItems="center">
            <Box component="img" src={bnb} />
            <Typography>0 BNB </Typography>
          </Box>
        </Box>
        <Typography mt={2}>Your Rewards</Typography>
        <Box
          mt={1}
          sx={{
            backgroundColor: "#222252",
            border: "1px solid #ffffff",
            borderRadius: "10px",
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>0 Earned</Typography>
          <Typography>$ 0.00</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Rewards;
