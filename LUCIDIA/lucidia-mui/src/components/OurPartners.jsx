import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";
import seven from "../assets/seven.png";
import eight from "../assets/eight.png";
import nine from "../assets/nine.png";
import ten from "../assets/ten.png";

const images = [
  { img: one },
  { img: two },
  { img: three },
  { img: four },
  { img: five },
  { img: six },
  { img: seven },
  { img: eight },
  { img: nine },
  { img: ten },
];
const OurPartners = () => {
  return (
    <Box mb={4}>
      <Container maxWidth="xl">
        <Box
          sx={{
            clipPath: {
              md: "polygon(18% 0, 21% 17%, 98% 19%, 100% 28%, 100% 100%, 2% 100%, 0 92%, 0 0)",
              sm: "none",
              xs: "none",
            },
            // height: "320px",
            width: "100%",
            backgroundColor: "#7700FF",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "SemiBold",
                fontSize: { md: "26px", sm: "40px", xs: "34px" },
                color: "#fff",
                ml: { md: 1 },
                pt: 3,
                textAlign: { md: "start", sm: "center", xs: "center" },
              }}
            >
              Our Partners
            </Typography>

            <Grid
              container
              sx={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                pl: { md: 2, xs: 9 },
              }}
            >
              {images.map((imgs, i) => {
                return (
                  <Grid item md={2.4} sm={4} xs={6} key={i} p={2}>
                    <Box component="img" src={imgs.img} width={100} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurPartners;
