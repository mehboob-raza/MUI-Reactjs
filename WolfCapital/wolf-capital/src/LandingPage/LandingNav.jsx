import { Box, Container, Typography } from "@mui/material";
import Button1 from "../Button/Button1";
import LOGOWC from "../assets/LOGOWC.png";
import { Link } from "react-router-dom";

const LandingNav = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box display="flex" alignItems="center">
            <Box component="img" src={LOGOWC} width={100} />
            <Box display="flex" gap={0.5}>
              <Typography
                sx={{ color: "#fff", fontWeight: 600, fontSize: "24px" }}
              >
                Wolf
              </Typography>
              <Typography sx={{ color: "#fff", fontSize: "24px" }}>
                Capital
              </Typography>
            </Box>
          </Box>
          <Link to="/dapp" style={{ textDecoration: "none" }}>
            <Button1 width="160px">Enter dApp</Button1>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingNav;
