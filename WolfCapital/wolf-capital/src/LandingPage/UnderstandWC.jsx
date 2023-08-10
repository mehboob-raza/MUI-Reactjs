import { Box, Container, Grid, Typography } from "@mui/material";
import PointingDown from "../assets/PointingDown.png";
import Button1 from "../Button/Button1";
import { RiArrowRightSLine } from "react-icons/ri";
import UnderStandWCCards from "./UnderStandWCCards";

const UnderstandWC = () => {
  return (
    <Box>
      <Container maxWidth="md">
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <Box
              display="flex"
              sx={{
                flexDirection: { md: "row", sm: "row", xs: "column" },
              }}
            >
              <Box
                component="img"
                src={PointingDown}
                // width="40%"
                height="40%"
                sx={{
                  width: { md: "40%", sm: "30%", xs: "100%" },
                }}
              />
              <Box
                ml="28%"
                pb={20}
                color="#fff"
                sx={{
                  mt: { lg: "28%", md: "30%", sm: "25%", xs: "5%" },
                  ml: { lg: -14, md: -12, sm: -6 },
                  // display: "flex",
                  textAlign: { md: "start", sm: "start", xs: "center" },
                  // flexDirection: "column",
                  // justifyContent:
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      md: "14px",
                      sm: "12px",
                      xs: "14px",
                    },
                    color: "gray",
                  }}
                >
                  DISCOVER THE POWER OF WOLFPACKS{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "52px",
                      md: "42px",
                      sm: "32px",
                      xs: "24px",
                    },
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Understanding Wolf Capital.
                </Typography>
                <Typography>
                  Knowledge is power, therefore we encourage everyone to take
                  informed decisions.{" "}
                </Typography>
                <Box display="flex" mt={3} justifyContent="center">
                  <Button1
                    background="#fff"
                    color="#000"
                    border="none"
                    width="160px"
                  >
                    GitBook
                    <RiArrowRightSLine />
                  </Button1>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <UnderStandWCCards />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default UnderstandWC;
