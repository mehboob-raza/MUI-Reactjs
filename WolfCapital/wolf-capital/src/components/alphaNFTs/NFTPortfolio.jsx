import { Box, Container, Typography } from "@mui/material";
import ALPHANFT from "../../assets/ALPHANFT.png";
import Group364 from "../../assets/Group364.png";
import Group406 from "../../assets/Group406.png";
import Group405 from "../../assets/Group405.png";

const NFTPortfolio = () => {
  return (
    <Box mt={4}>
      <Container maxWidth="lg">
        <Box
          sx={{
            background: "linear-gradient(45deg, #1B1B1B 30%, #282828 100%)",
            borderRadius: "10px",
            p: 4,
          }}
        >
          <Typography variant="h3" sx={{ color: "#ffff", textAlign: "center" }}>
            Your NFT Portfolio
          </Typography>

          <Box
            mt={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box component="img" src={Group406} width="10%" height="20%" />
            <Box
              display="flex"
              sx={{ position: "relative", justifyContent: "center" }}
            >
              <Box component="img" src={Group364} width="30%" />

              <Box
                component="img"
                src={ALPHANFT}
                width="30%"
                sx={{ position: "absolute", left: "34%" }}
              />
              <Box
                component="img"
                src={Group364}
                width="30%"
                sx={{ ml: "10%" }}
              />
            </Box>
            <Box component="img" src={Group405} width="10%" height="20%" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NFTPortfolio;
