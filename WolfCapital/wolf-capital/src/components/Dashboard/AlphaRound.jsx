import { Box, Container, Grid, Typography } from "@mui/material";
import coins from "../../assets/coins.png";
import PoitingRight1 from "../../assets/PoitingRight1.png";

const AlphaRound = () => {
  return (
    <Box>
      <Container>
        <Box
          sx={{
            background: "linear-gradient(45deg, #1B1B1B 30%, #282828 70%)",
            borderRadius: "10px",
            p: 2,
            mt: 6,
            // minHeight: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Grid container>
            <Grid item md={8} sm={9} xs={9}>
              <Box mt={2} mb={2}>
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: { md: "34px", sm: "20px", xs: "22px" },
                  }}
                >
                  ALPHA ROUND
                </Typography>
                <Typography
                  sx={{
                    color: "#0094FF",
                    fontWeight: "bold",
                    mt: 1,
                    fontSize: { md: "34px", sm: "20px", xs: "22px" },
                  }}
                >
                  CASHBACKS
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: "light",
                    fontSize: { md: "24px", sm: "18px", xs: "18px" },
                    mt: 1,
                    width: { md: "40%", sm: "100%", xs: "100%" },
                  }}
                >
                  Keep an eye for the Alpha Rounds on our Discord and Telegram
                  to get a <span style={{ color: "#0094FF" }}>3% CASHBACK</span>{" "}
                  on $2,000 USDC stakes and above.
                </Typography>
                <Box
                  component="img"
                  src={coins}
                  sx={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: { sm: 0, md: "26%", xs: 0 },
                    width: { md: "50%", sm: "60%", xs: "60%" },
                    height: { md: "100%", sm: "100%", xs: "100%" },
                  }}
                />
              </Box>
            </Grid>

            <Grid item md={4} sm={3} xs={3}>
              <Box
                component="img"
                src={PoitingRight1}
                width="100%"
                height="100%"
                sx={{}}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AlphaRound;
