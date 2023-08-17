import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Frame75 from "../../assets/Frame75.png";
import Group35017 from "../../assets/Group35017.png";
import Group35018 from "../../assets/Group35018.png";
import Group35019 from "../../assets/Group35019.png";
import Group402 from "../../assets/Group402.png";
import Group293 from "../../assets/Group293.png";

const portfolioData = [
  {
    img: Group35018,
    h: "Total Deposited",
    p: "$2,000",
  },
  {
    img: Group35017,
    h: "Currently Staked",
    p: "$1,900 ",
  },
  {
    img: Frame75,
    h: "Claimable Profit",
    p: "$38",
  },
  {
    img: Group293,
    h: "Total Withdrawn",
    p: "$10,000",
  },
  {
    img: Group35019,
    h: "Active  Stakes",
    p: "6",
  },
  {
    img: Group402,
    h: "Next Profit Distribution",
    p: "00d 00h 00m",
  },
];
const StakingPortfolio = () => {
  return (
    <Box mt={4}>
      <Container maxWidth="lg">
        <Box
          sx={{
            background: "linear-gradient(45deg, #1B1B1B 30%, #282828 70%)",
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Typography variant="h4" sx={{ color: "#fff" }}>
            Your Staking Portfolio
          </Typography>

          <Grid container mt={4}>
            {portfolioData.map((data, i) => {
              return (
                <Grid item key={i} md={4} sm={6} xs={6}>
                  <Box
                    display="flex"
                    color="#fff"
                    // justifyContent="center"
                    alignItems="center"
                    mt={2}
                  >
                    <Box component="img" src={data.img} />
                    <Box>
                      <Typography> {data.h} </Typography>
                      <Typography> {data.p} </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Box
            mt={4}
            sx={{
              background:
                "linear-gradient(to right, #2E2D2D 60%, #242323 100%)",
              borderRadius: "30px",
              p: 1,
              display: "flex",
              justifyContent: "space-around",

              alignItems: "center",
            }}
          >
            <Box
              sx={{
                borderRight: "1px solid gray", // Add the border here
                height: "100%",
                display: "flex",
                pr: 9,
              }}
            >
              <Button
                sx={{
                  // borderRight: "1px solid gray",
                  background: "#404040",
                  borderRadius: "20px",
                  // p: 1,
                  color: "#ffffff",
                  "&:hover": {
                    background: "blue",
                  },
                }}
              >
                unstake all{" "}
              </Button>
            </Box>
            <Box
              sx={{
                borderRight: "1px solid gray", // Add the border here
                height: "100%",
                display: "flex",
                pr: 9,
              }}
            >
              <Button
                sx={{
                  // borderRight: "1px solid gray",
                  background: "#404040",
                  color: "#ffffff",
                  borderRadius: "20px",
                  p: 1,
                  "&:hover": {
                    background: "blue",
                  },
                }}
              >
                merge{" "}
              </Button>
            </Box>
            <Button
              sx={{
                // borderRight: "1px solid gray",
                background: "#404040",
                color: "#ffffff",
                borderRadius: "20px",
                p: 1,
                "&:hover": {
                  background: "blue",
                },
              }}
            >
              claim{" "}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default StakingPortfolio;
