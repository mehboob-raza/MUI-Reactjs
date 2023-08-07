import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import banner from "../assets/banner.png";
import image57 from "../assets/image57.png";

const dataa = [
  {
    h1: "$1M+",
    p: "to be unlocked by user",
  },
  {
    h1: "115M+",
    p: "in game assets",
  },
  {
    h1: "6+",
    p: "game inside metaverse",
  },
  {
    h1: "60+",
    p: "maps",
  },
];

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#C0FF0E",
        p: 2,
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          sx={{
            display: "flex",
            // gap: 6,
            margin: "0 auto",
            // m: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {dataa.map((data, i) => {
            return (
              <Grid item key={i} md={3} sm={6} xs={6}>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="h5" sx={{ fontFamily: "SemiBold" }}>
                    {" "}
                    {data?.h1}{" "}
                  </Typography>
                  <Typography sx={{ fontFamily: "Light", color: "black" }}>
                    {" "}
                    {data?.p}{" "}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
