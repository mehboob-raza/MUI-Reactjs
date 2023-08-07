import { Box, Container, Grid, Typography } from "@mui/material";
import bgg from "../assets/bgg.png";
import image5 from "../assets/image5.png";
import Button1 from "./Button1";
import image6 from "../assets/image6.png";

const EarnPassiveIncome = () => {
  return (
    <Box
      sx={{
        background: `url(${bgg})`,
        backgroundSize: "60% 100%",
        backgroundRepeat: "no-repeat",
        pt: 10,
        pb: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item md={6} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: { md: "flex-start", sm: "center", xs: "center" },
              }}
            >
              <Box component="img" src={image5} width={100} />
              <Typography
                variant="h5"
                mt={2}
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  textAlign: { xs: "center" },
                  fontSize: { xs: "20px" },
                }}
              >
                Earn passive income with crypto.
              </Typography>
              <Typography
                mt={2}
                mb={2}
                sx={{ color: "#fff", textAlign: { xs: "center" } }}
              >
                Crypto Swap makes it easy to make your crypto work for you.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button1>Explore</Button1>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            sx={{
              m: { md: 0, sm: 4, xs: 6 },
            }}
          >
            <Box
              component="img"
              src={image6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                width: { md: "50%", sm: "100%", xs: "100%" },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EarnPassiveIncome;
