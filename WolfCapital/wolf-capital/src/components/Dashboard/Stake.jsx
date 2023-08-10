import { Box, Container, Grid, Typography } from "@mui/material";
import stake from "../../assets/Stake.png";
import Button1 from "../../Button/Button1";

const Stake = () => {
  return (
    <Box mt={8}>
      <Container maxWidth="lg">
        <Box
          sx={{
            background: { md: `url(${stake})`, sm: "none", xs: "none" },
            backgroundRepeat: { md: "no-repeat" },
            backgroundSize: { md: "100% 100%" },
            minHeight: "265px",
            width: "100%",
            borderRadius: "30px",
            boxShadow: "0px 10px 10px 10px #000",
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Grid container>
            <Grid item md={6} sm={12} xs={12}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                mt={5}
                sx={{
                  background: { md: "none", sm: "#191919", xs: "#191919" },
                  pb: { md: 0, sm: 2, xs: 3 },
                }}
              >
                <Box
                  display="flex"
                  gap={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography sx={{ color: "#fff", fontSize: "32px" }}>
                    Total
                  </Typography>
                  <Typography sx={{ color: "#0094FF", fontSize: "32px" }}>
                    $USDC
                  </Typography>
                  <Typography sx={{ color: "#fff", fontSize: "32px" }}>
                    Staked
                  </Typography>
                </Box>
                <Typography
                  sx={{ color: "#fff", fontWeight: "bold", fontSize: "38px" }}
                >
                  3,000,000
                </Typography>
              </Box>
            </Grid>
            {/* <Grid item md={1}></Grid> */}
            <Grid item md={5} sm={12} xs={12}>
              <Box
                sx={{
                  background: { md: "none", sm: "#3A3BD0", xs: "#3A3BD0" },
                  ml: { md: 9, sm: 0, xs: 0 },
                  display: "flex",
                  flexDirection: "column",
                  pt: { md: 0, sm: 2, xs: 3 },
                  borderRadius: {
                    md: 0,
                    sm: "0px 0px 10px 10px",
                    xs: "0px 0px 10px 10px",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "32px",
                    textAlign: { md: "start", sm: "center", xs: "center" },
                  }}
                >
                  Stake
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: { md: "16px", sm: "20px" },
                    textAlign: { md: "start", sm: "center", xs: "center" },
                  }}
                >
                  Stake your $USDC with Wolf Capital. Experience a dynamic yield
                  model, driven by real trading profits. Profit distributions
                  are made weekly, every Friday.
                </Typography>
                <Box
                  display="flex"
                  mt={2}
                  sx={{
                    justifyContent: { md: "start", sm: "center", xs: "center" },
                    pb: 2,
                  }}
                >
                  <Button1
                    width="160px"
                    border="none"
                    background="linear-gradient(to right, #343434 0%, #5F5F5F 45%)"
                  >
                    Start Staking
                  </Button1>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Stake;
