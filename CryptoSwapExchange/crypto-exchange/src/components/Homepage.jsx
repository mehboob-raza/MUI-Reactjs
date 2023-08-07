import { Box, Container, Grid, Typography } from "@mui/material";
import Button1 from "./Button1";
import homegrp from "../assets/homegrp.png";
import homebg from "../assets/homebg.png";

const Homepage = () => {
  return (
    <Box
      sx={{
        background: `url(${homebg} )`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item md={6} sm={12} xs={12} mt={6}>
            <Box display="flex" flexDirection="column">
              <Typography
                // variant="h3"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: { md: "32px", sm: "24px", xs: "20px" },
                  textAlign: { xs: "center" },
                }}
              >
                More than a crypto exchange
              </Typography>
              <Typography
                mt={2}
                variant="body1"
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  textAlign: { md: "start", xs: "center" },
                }}
              >
                Trade, earn, and win crypto on the most popular decentralized
                platform in the galaxy.
              </Typography>
            </Box>

            <Box
              display="flex"
              gap={2}
              mt={4}
              sx={{
                justifyContent: { xs: "center" },
              }}
            >
              <Button1>Connect Wallet</Button1>
              <Button1>Trade now</Button1>
            </Box>
          </Grid>

          <Grid item md={6}>
            <Box component="img" src={homegrp} width="80%" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Homepage;
