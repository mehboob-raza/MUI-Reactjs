import { Box, Divider, Typography } from "@mui/material";
import Button1 from "../Button1";

const StakeLiquidity = () => {
  return (
    <Box>
      <Box mt={2} color="#fff" mb={2}>
        <Typography>Stake Liquidity</Typography>
        <Typography sx={{ fontSize: "12px" }}>
          Use one of the buttons to set a percentage or enter a value manually
          using the input field
        </Typography>
      </Box>
      <Divider
        sx={{
          backgroundColor: "#fff",
        }}
      />
      <Box display="flex" mt={2} alignItems="center" gap={2}>
        <Button1> 25% </Button1>
        <Button1> 50% </Button1>
        <Button1> 75% </Button1>
        <Button1> Max </Button1>
      </Box>

      <Box
        mt={2}
        sx={{
          background: "#222252",
          border: "1px solid #ffffff",
          borderRadius: "10px",
          p: 2,
        }}
      >
        <Typography
          sx={{
            color: "#fff",
          }}
        >
          SLP
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box mt={1} display="flex" gap={1}>
            <Typography sx={{ color: "#fff", fontSize: "24px" }}>
              0.00
            </Typography>
            <Typography sx={{ color: "gray", fontSize: "12px", mt: 2 }}>
              0.00USD
            </Typography>
          </Box>
          <Typography sx={{ color: "gray", fontSize: "20px" }}>
            Balance
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StakeLiquidity;
