import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import PoitingRight from "../assets/PoitingRight.png";
import Button1 from "../Button/Button1";
import { RiArrowRightSLine } from "react-icons/ri";

const MovingForward = () => {
  const matches = useMediaQuery(" (min-width:1700px) ");
  const matches1 = useMediaQuery(" (min-width:2150px) ");

  return (
    <Box mb={6}>
      {/* <Container maxWidth="lg"> */}
      <Grid container>
        <Grid item md={2} sm={12} xs={12}>
          <Box
            component="img"
            src={PoitingRight}
            sx={{
              ml: { md: 4 },
              width: { md: "100%", sm: "90%", xs: "70%" },
            }}
          />
        </Grid>
        <Grid
          item
          md={7}
          sm={12}
          xs={12}
          sx={{
            mt: matches1 ? 4 : 1,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              color="#fff"
              ml={0}
              sx={{
                mt: { lg: 3, md: 1 },
              }}
            >
              <Typography
                sx={{
                  color: "gray",
                  textAlign: { md: "start", sm: "center", xs: "center" },
                  fontSize: { lg: "30px", md: "24px", sm: "20px", xs: "18px" },
                }}
              >
                From the community, for the community.
              </Typography>
              <Box
                mt={3}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  flexDirection: { md: "row", sm: "column", xs: "column" },
                }}
              >
                <Typography
                  // variant="h4"
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      lg: "58px",
                      md: "46px",
                      sm: "38px",
                      xs: "26px",
                    },
                  }}
                >
                  Moving Forward Together.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <Typography sx={{ fontSize: "40px", fontWeight: 600 }}>
                    300
                  </Typography>
                  <Typography
                    sx={{
                      position: "absolute",
                      bottom: -4,
                      fontSize: "10px",
                      right: -30,
                      color: "gray",
                    }}
                  >
                    Investors
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  flexDirection: { md: "row", sm: "column", xs: "column" },
                  mt: 1,
                }}
              >
                <Typography
                  sx={{
                    width: { lg: "70%", md: "80%", sm: "90%", xs: "90%" },
                    textAlign: { md: "start", sm: "center", xs: "center" },
                    fontSize: {
                      lg: "22px",
                      md: "18px",
                      sm: "16px",
                      xs: "18px",
                    },
                  }}
                >
                  Seize the moment, step into the arena of the revolutionary. At
                  Wolf Capital, you're not just an investor - you're part of the
                  Wolfpack, an unstoppable force set to imprint its legacy on
                  DeFi forever. Join us, and be part of this audacious
                  journey.The Alpha awaits – it's time to claim your territory.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    ml: 8,
                    justifyContent: { xs: "center", sm: "center" },
                  }}
                >
                  <Typography sx={{ fontSize: "40px", fontWeight: 600 }}>
                    29
                  </Typography>
                  <Typography
                    sx={{
                      position: "absolute",
                      bottom: -4,
                      fontSize: "10px",
                      right: 0,
                      color: "gray",
                    }}
                  >
                    Wolfpacks
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            gap={2}
            mt={4}
            sx={{
              justifyContent: { xs: "center" },
            }}
          >
            <Button1 background="#fff" color="#000" width="160px">
              Enter dApp
            </Button1>
            <Button1
              border="none"
              width="200px"
              style={{ display: "flex", alignItems: "center" }}
            >
              {" "}
              Explore WolfPack
              <RiArrowRightSLine />
            </Button1>
          </Box>
        </Grid>
      </Grid>
      {/* </Container> */}
    </Box>
  );
};

export default MovingForward;
