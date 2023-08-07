import { Box, Container, Grid, Typography } from "@mui/material";
import frame4 from "../assets/Frame4.png";
import Group2 from "../assets/Group2.png";
import Button1 from "./Button1";
import imagetop from "../assets/imagetop.png";
import imagelines from "../assets/imagelines.png";
import image112 from "../assets/image112.png";
import image110 from "../assets/image110.png";

const CryptoExchange = () => {
  return (
    <Box
      sx={{
        background: `url(${frame4})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        pt={12}
        pb={12}
        sx={{
          display: "flex",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={imagetop}
          sx={{
            ml: 4,
            width: { md: "3%", sm: "8%", xs: "10%" },
            display: "flex",
            position: "absolute",
            left: "2%",
            top: 0,
          }}
        />
        <Box
          component="img"
          src={image110}
          sx={{
            ml: 4,
            width: { md: "5%", sm: "8%", xs: "10%" },
            display: "flex",
            position: "absolute",
            right: 0,
            top: 0,
          }}
        />

        <Box
          component="img"
          src={imagelines}
          sx={{
            ml: 4,
            width: { md: "13%", sm: "8%", xs: 0 },
            display: "flex",
            position: "absolute",
            left: "2%",
            top: "10%",
            overflow: "hidden",
          }}
        />
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
                component="img"
                src={Group2}
                sx={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { md: "start", sm: "center", xs: "center" },
                  alignItems: { md: "start", sm: "center", xs: "center" },
                  mt: { md: 0, sm: 6, xs: 8 },
                }}
              >
                <Typography
                  // variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                    textTransform: "uppercase",
                    fontSize: { md: "34px", sm: "24px", xs: "24px" },
                  }}
                >
                  Best rates crypto exchange
                </Typography>
                <Typography
                  mt={2}
                  mb={2}
                  sx={{
                    color: "#fff",
                    textAlign: { md: "start", sm: "center", xs: "center" },
                  }}
                >
                  We work with multiple cryptocurrency trading platforms and
                  exchange partners to guarantee the best rates to our clients
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button1>Check Rate</Button1>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box
          component="img"
          src={image112}
          sx={{
            ml: 4,
            width: { md: "8%", sm: "10%", xs: "10%" },
            display: "flex",
            position: "absolute",
            left: "10%",
            bottom: 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default CryptoExchange;
