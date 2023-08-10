import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Stars from "../assets/Stars.png";
import Moon from "../assets/Moon.png";

const LandingWelcome = () => {
  const matches = useMediaQuery(" (min-width:1700px) ");
  const matches1 = useMediaQuery(" (min-width:2150px) ");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Container maxWidth="md">
        <Box
          color="#fff"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "gray" }}>
            Welcome to Wolf Capital
          </Typography>
          <Box
            component="img"
            src={Stars}
            width={50}
            sx={{
              position: "absolute",
              left: "22%",
              top: "10%",
              display: { md: "flex", sm: "none", xs: "none" },
            }}
          />
          <Typography
            variant="h1"
            zIndex={100}
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: { md: "90px", sm: "82px", xs: "46px" },
              // textAlign: { md: "start", sm: "center", xs: "center" },
            }}
          >
            Together we will redefine Staking
          </Typography>
          <Typography sx={{ color: "gray", mt: 2 }}>
            Unleash the Power of Team Staking.
          </Typography>
          <Typography variant="h2" sx={{ color: "#fff", mt: 4 }}>
            $100,000
          </Typography>
          <Typography sx={{ mt: 1, fontWeight: "14px" }}>
            Total Investments{" "}
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{
          display: "flex",
          // position: "relative",
        }}
      >
        <Box
          component="img"
          src={Moon}
          sx={{
            width: { lg: "20%", md: "30%", sm: "50%", xs: "60%" },
            position: "absolute",
            right: { lg: "20%", md: "6%", sm: "0%", xs: "0%" },
            // right: matches ? "10%" : matches1 ? "8%" : matches2 ? "0%" : "3%",
            top: { lg: "20%", md: "16%", sm: " 0%", xs: "16%" },
            // top: matches ? "10%" : matches1 ? "10%" : matches2 ? "80%" : "50%",
            opacity: 0.9,
          }}
        />
      </Box>
    </Box>
  );
};

export default LandingWelcome;
